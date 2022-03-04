"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingModule = void 0;
const common_1 = require("@nestjs/common");
const rating_service_1 = require("./rating.service");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const roles_model_1 = require("../roles/roles.model");
const user_roles_model_1 = require("../roles/user-roles.model");
const rating_model_1 = require("./rating.model");
const users_module_1 = require("../users/users.module");
const device_module_1 = require("../device/device.module");
let RatingModule = class RatingModule {
};
RatingModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [rating_service_1.RatingService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, roles_model_1.Role, user_roles_model_1.UserRoles, rating_model_1.Rating]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => device_module_1.DeviceModule)
        ],
        exports: [
            rating_service_1.RatingService
        ]
    })
], RatingModule);
exports.RatingModule = RatingModule;
//# sourceMappingURL=rating.module.js.map