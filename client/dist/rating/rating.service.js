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
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const rating_model_1 = require("./rating.model");
const users_service_1 = require("../users/users.service");
const device_service_1 = require("../device/device.service");
let RatingService = class RatingService {
    constructor(ratingRepository, usersService, deviceService) {
        this.ratingRepository = ratingRepository;
        this.usersService = usersService;
        this.deviceService = deviceService;
    }
    async createRating(deviceId, dto) {
        const user = await this.usersService.getUserById(dto.userId);
        const device = await this.deviceService.getDeviceById(deviceId);
        if (user && device) {
            const check = await this.getRatingByDeviceIdAndUserId(deviceId, dto.userId);
            if (check) {
                throw new common_1.HttpException('Данный товар уже оценен', common_1.HttpStatus.NOT_FOUND);
            }
            const rating = await this.ratingRepository.create({ rating: dto.rating, userId: dto.userId, deviceId: deviceId });
            device.rating = await this.calculateRating(device.id);
            await device.save();
            return rating;
        }
        throw new common_1.HttpException('Пользователь или товар не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async getRatingByUserId(userId) {
        const userRatings = await this.ratingRepository.findAll({ where: { userId } });
        return userRatings;
    }
    async getRatingByDeviceId(deviceId) {
        const deviceRatings = await this.ratingRepository.findAll({ where: { deviceId } });
        return deviceRatings;
    }
    async getAllRatings() {
        const ratings = await this.ratingRepository.findAll();
        return ratings;
    }
    async getRatingByDeviceIdAndUserId(deviceId, userId) {
        const Rating = await this.ratingRepository.findOne({ where: { deviceId, userId } });
        return Rating;
    }
    async deleteRating(deviceId, dto) {
        const user = await this.usersService.getUserById(dto.userId);
        const device = await this.deviceService.getDeviceById(deviceId);
        if (user && device) {
            const rating = await this.getRatingByDeviceIdAndUserId(deviceId, dto.userId);
            if (!rating) {
                throw new common_1.HttpException('Данный товар еще не оценен', common_1.HttpStatus.NOT_FOUND);
            }
            await rating.destroy();
            device.rating = await this.calculateRating(device.id);
            await device.save();
            return rating;
        }
        throw new common_1.HttpException('Пользователь или товар не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async updateRating(deviceId, dto) {
        const user = await this.usersService.getUserById(dto.userId);
        const device = await this.deviceService.getDeviceById(deviceId);
        if (user && device) {
            const rating = await this.getRatingByDeviceIdAndUserId(deviceId, dto.userId);
            if (!rating) {
                throw new common_1.HttpException('Данный товар еще не оценен', common_1.HttpStatus.NOT_FOUND);
            }
            await rating.update({ rating: dto.rating });
            device.rating = await this.calculateRating(device.id);
            await device.save();
            return await this.getRatingByDeviceIdAndUserId(deviceId, dto.userId);
        }
        throw new common_1.HttpException('Пользователь или товар не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async calculateRating(deviceId) {
        const ratings = await this.getRatingByDeviceId(deviceId);
        if (ratings) {
            let avgRating = 0;
            for (let rating of ratings) {
                avgRating += rating.rating;
            }
            avgRating /= ratings.length;
            return avgRating;
        }
        return null;
    }
};
RatingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(rating_model_1.Rating)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => device_service_1.DeviceService))),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        device_service_1.DeviceService])
], RatingService);
exports.RatingService = RatingService;
//# sourceMappingURL=rating.service.js.map