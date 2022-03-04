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
exports.BasketService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const basket_model_1 = require("./basket.model");
const users_service_1 = require("../users/users.service");
const device_service_1 = require("../device/device.service");
const basket_device_model_1 = require("../device/basket-device.model");
const device_model_1 = require("../device/device.model");
let BasketService = class BasketService {
    constructor(basketRepository, basketDeviceRepository, deviceService, userService) {
        this.basketRepository = basketRepository;
        this.basketDeviceRepository = basketDeviceRepository;
        this.deviceService = deviceService;
        this.userService = userService;
    }
    async createBasket(dto) {
        const check = await this.getBasketByUserId(dto.userId);
        if (check) {
            throw new common_1.HttpException('Данный пользователь имеет корзину', common_1.HttpStatus.FORBIDDEN);
        }
        const basket = await this.basketRepository.create(dto);
        return basket;
    }
    async getBasketByUserId(userId) {
        const basket = await this.basketRepository.findOne({ where: { userId } });
        return basket;
    }
    async myGetBasketByUserId(userId) {
        const basket = await this.basketRepository.findOne({ where: { userId }, include: { model: device_model_1.Device, as: 'devices', through: { attributes: ['deviceCnt'] } } });
        if (!basket) {
            throw new common_1.HttpException('Такого пользователя не существует', common_1.HttpStatus.NOT_FOUND);
        }
        return basket;
    }
    async getAllBaskets() {
        const baskets = await this.basketRepository.findAll({ include: device_model_1.Device });
        return baskets;
    }
    async deleteBasket(userId) {
        const basket = await this.getBasketByUserId(userId);
        await basket.destroy();
        return basket;
    }
    async getBasketDevice(basketId, deviceId) {
        return await this.basketDeviceRepository.findOne({ where: { basketId, deviceId } });
    }
    async addDevice(addDeviceDto) {
        const user = await this.userService.getUserByEmail(addDeviceDto.userEmail);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        const device = await this.deviceService.getDeviceById(addDeviceDto.deviceId);
        const basket = await this.getBasketByUserId(user.id);
        if (basket && device) {
            const basketDevice = await this.getBasketDevice(basket.id, device.id);
            if (!basketDevice) {
                await basket.$add('device', device.id);
                return;
            }
            basketDevice.deviceCnt += 1;
            await basketDevice.save();
            return;
        }
        throw new common_1.HttpException('Корзина или товар не найден', common_1.HttpStatus.NOT_FOUND);
    }
    async removeDevice(removeDeviceDto) {
        const user = await this.userService.getUserByEmail(removeDeviceDto.userEmail);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.BAD_REQUEST);
        }
        const device = await this.deviceService.getDeviceById(removeDeviceDto.deviceId);
        const basket = await this.getBasketByUserId(user.id);
        if (basket && device) {
            const basketDevice = await this.getBasketDevice(basket.id, device.id);
            if (!basketDevice) {
                return;
            }
            if (basketDevice.deviceCnt == 1) {
                await basket.$remove('device', device.id);
                return;
            }
            basketDevice.deviceCnt -= 1;
            await basketDevice.save();
            return;
        }
        throw new common_1.HttpException('Корзина или товар не найден', common_1.HttpStatus.BAD_REQUEST);
    }
};
BasketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(basket_model_1.Basket)),
    __param(1, (0, sequelize_1.InjectModel)(basket_device_model_1.BasketDevice)),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [Object, Object, device_service_1.DeviceService,
        users_service_1.UsersService])
], BasketService);
exports.BasketService = BasketService;
//# sourceMappingURL=basket.service.js.map