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
exports.BasketController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const basket_service_1 = require("./basket.service");
const basket_model_1 = require("./basket.model");
const add_device_dto_1 = require("./dto/add-device.dto");
const remove_device_dto_1 = require("./dto/remove-device.dto");
let BasketController = class BasketController {
    constructor(basketService) {
        this.basketService = basketService;
    }
    getByValue(userId) {
        return this.basketService.myGetBasketByUserId(userId);
    }
    addDevice(dto) {
        return this.basketService.addDevice(dto);
    }
    removeDevice(dto) {
        return this.basketService.removeDevice(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить информацию о корзине пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: basket_model_1.Basket }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Такого пользователя не существует' }),
    (0, common_1.Get)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "getByValue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавить товар в корзину' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Пользователь или товар не найден' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/device/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_device_dto_1.AddDeviceDto]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "addDevice", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить товар из корзины' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Пользователь или товар не найден' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/device/remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [remove_device_dto_1.RemoveDeviceDto]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "removeDevice", null);
BasketController = __decorate([
    (0, swagger_1.ApiTags)('Корзина'),
    (0, common_1.Controller)('/basket'),
    __metadata("design:paramtypes", [basket_service_1.BasketService])
], BasketController);
exports.BasketController = BasketController;
//# sourceMappingURL=basket.controller.js.map