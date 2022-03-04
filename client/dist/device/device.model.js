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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const basket_model_1 = require("../basket/basket.model");
const device_info_model_1 = require("./device-info.model");
const type_model_1 = require("./type.model");
const brand_model_1 = require("./brand.model");
const basket_device_model_1 = require("./basket-device.model");
const rating_model_1 = require("../rating/rating.model");
let Device = class Device extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Device.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Iphone 13', description: 'Название товара' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Device.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 49990, description: 'Цена' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Device.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4.4, description: 'Рейтинг товара' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, defaultValue: null }),
    __metadata("design:type", Number)
], Device.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1.png', description: 'Путь до изображения' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Device.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Идентификатор бренда ' }),
    (0, sequelize_typescript_1.ForeignKey)(() => brand_model_1.Brand),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Device.prototype, "brandId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Идентификатор типа товара' }),
    (0, sequelize_typescript_1.ForeignKey)(() => type_model_1.Type),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Device.prototype, "typeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Корзины, в которых находится товар', type: [basket_device_model_1.BasketDevice] }),
    (0, sequelize_typescript_1.BelongsToMany)(() => basket_model_1.Basket, () => basket_device_model_1.BasketDevice),
    __metadata("design:type", Array)
], Device.prototype, "baskets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Записи информации о товаре', type: [device_info_model_1.DeviceInfo] }),
    (0, sequelize_typescript_1.HasMany)(() => device_info_model_1.DeviceInfo),
    __metadata("design:type", Array)
], Device.prototype, "deviceInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Оценки товара', type: [rating_model_1.Rating] }),
    (0, sequelize_typescript_1.HasMany)(() => rating_model_1.Rating),
    __metadata("design:type", Array)
], Device.prototype, "ratings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Бренд', type: brand_model_1.Brand }),
    (0, sequelize_typescript_1.BelongsTo)(() => brand_model_1.Brand),
    __metadata("design:type", brand_model_1.Brand)
], Device.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Тип', type: type_model_1.Type }),
    (0, sequelize_typescript_1.BelongsTo)(() => type_model_1.Type),
    __metadata("design:type", type_model_1.Type)
], Device.prototype, "type", void 0);
Device = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'devices', createdAt: false, updatedAt: false })
], Device);
exports.Device = Device;
//# sourceMappingURL=device.model.js.map