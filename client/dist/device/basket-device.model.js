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
exports.BasketDevice = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const basket_model_1 = require("../basket/basket.model");
const device_model_1 = require("./device.model");
let BasketDevice = class BasketDevice extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], BasketDevice.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => basket_model_1.Basket),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], BasketDevice.prototype, "basketId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => device_model_1.Device),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], BasketDevice.prototype, "deviceId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 1 }),
    __metadata("design:type", Number)
], BasketDevice.prototype, "deviceCnt", void 0);
BasketDevice = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'basket_device', createdAt: false, updatedAt: false })
], BasketDevice);
exports.BasketDevice = BasketDevice;
//# sourceMappingURL=basket-device.model.js.map