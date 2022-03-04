"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketModule = void 0;
const common_1 = require("@nestjs/common");
const basket_service_1 = require("./basket.service");
const basket_controller_1 = require("./basket.controller");
const sequelize_1 = require("@nestjs/sequelize");
const roles_model_1 = require("../roles/roles.model");
const users_model_1 = require("../users/users.model");
const user_roles_model_1 = require("../roles/user-roles.model");
const basket_model_1 = require("./basket.model");
const device_module_1 = require("../device/device.module");
const users_module_1 = require("../users/users.module");
const basket_device_model_1 = require("../device/basket-device.model");
let BasketModule = class BasketModule {
};
BasketModule = __decorate([
    (0, common_1.Module)({
        controllers: [basket_controller_1.BasketController],
        providers: [basket_service_1.BasketService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([roles_model_1.Role, users_model_1.User, user_roles_model_1.UserRoles, basket_model_1.Basket, basket_device_model_1.BasketDevice]),
            device_module_1.DeviceModule,
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
        ],
        exports: [
            basket_service_1.BasketService
        ]
    })
], BasketModule);
exports.BasketModule = BasketModule;
//# sourceMappingURL=basket.module.js.map