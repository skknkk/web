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
exports.DeviceInfo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const device_model_1 = require("./device.model");
let DeviceInfo = class DeviceInfo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный идентификатор' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], DeviceInfo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Оперативная память', description: 'Характеристика' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], DeviceInfo.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8 Гб', description: 'Значение характеристики' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], DeviceInfo.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Идентификатор товара' }),
    (0, sequelize_typescript_1.ForeignKey)(() => device_model_1.Device),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], DeviceInfo.prototype, "deviceId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => device_model_1.Device),
    __metadata("design:type", device_model_1.Device)
], DeviceInfo.prototype, "device", void 0);
DeviceInfo = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'deviceInfo', createdAt: false, updatedAt: false })
], DeviceInfo);
exports.DeviceInfo = DeviceInfo;
//# sourceMappingURL=device-info.model.js.map