"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceModule = void 0;
const common_1 = require("@nestjs/common");
const device_service_1 = require("./device.service");
const device_controller_1 = require("./device.controller");
const sequelize_1 = require("@nestjs/sequelize");
const roles_model_1 = require("../roles/roles.model");
const users_model_1 = require("../users/users.model");
const basket_model_1 = require("../basket/basket.model");
const user_roles_model_1 = require("../roles/user-roles.model");
const device_model_1 = require("./device.model");
const brand_model_1 = require("./brand.model");
const type_model_1 = require("./type.model");
const basket_device_model_1 = require("./basket-device.model");
const device_info_model_1 = require("./device-info.model");
const rating_model_1 = require("../rating/rating.model");
const rating_module_1 = require("../rating/rating.module");
const files_module_1 = require("../files/files.module");
let DeviceModule = class DeviceModule {
};
DeviceModule = __decorate([
    (0, common_1.Module)({
        providers: [device_service_1.DeviceService],
        controllers: [device_controller_1.DeviceController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, roles_model_1.Role, user_roles_model_1.UserRoles, basket_model_1.Basket, brand_model_1.Brand, type_model_1.Type, device_model_1.Device, basket_device_model_1.BasketDevice, device_info_model_1.DeviceInfo, rating_model_1.Rating]),
            (0, common_1.forwardRef)(() => rating_module_1.RatingModule),
            files_module_1.FilesModule
        ],
        exports: [
            device_service_1.DeviceService,
        ]
    })
], DeviceModule);
exports.DeviceModule = DeviceModule;
//# sourceMappingURL=device.module.js.map