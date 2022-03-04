"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
const sequelize_1 = require("@nestjs/sequelize");
const roles_service_1 = require("../roles/roles.service");
const basket_service_1 = require("../basket/basket.service");
const rating_service_1 = require("../rating/rating.service");
const device_service_1 = require("../device/device.service");
const roles_model_1 = require("../roles/roles.model");
const basket_model_1 = require("../basket/basket.model");
let UsersService = class UsersService {
    constructor(userRepository, roleService, basketService, ratingService, deviceService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.basketService = basketService;
        this.ratingService = ratingService;
        this.deviceService = deviceService;
    }
    async createUser(dto) {
        const check = await this.getUserByEmail(dto.email);
        if (check) {
            throw new common_1.HttpException('Пользователь с таким email уже существует', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userRepository.create(dto);
        await this.basketService.createBasket({ userId: user.id });
        const role = await this.roleService.getRoleByValue("USER");
        if (!role) {
            throw new common_1.HttpException('Такой роли не существует', common_1.HttpStatus.NOT_FOUND);
        }
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: [{ model: roles_model_1.Role, as: 'roles', attributes: ['value'], through: { attributes: [] } }, basket_model_1.Basket] });
        return users;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        return user;
    }
    async addRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (user && role) {
            await user.$add('roles', role.id);
            return dto;
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async removeRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (user && role) {
            await user.$remove('roles', role.id);
            return dto;
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async ban(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return;
    }
    async deleteUser(dto) {
        const user = await this.getUserByEmail(dto.email);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        await this.basketService.deleteBasket(user.id);
        const ratings = await this.ratingService.getRatingByUserId(user.id);
        await user.destroy();
        for (let rating of ratings) {
            const newRating = await this.ratingService.calculateRating(rating.deviceId);
            const device = await this.deviceService.getDeviceById(rating.deviceId);
            device.rating = newRating;
            await device.save();
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => rating_service_1.RatingService))),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => device_service_1.DeviceService))),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService,
        basket_service_1.BasketService,
        rating_service_1.RatingService,
        device_service_1.DeviceService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map