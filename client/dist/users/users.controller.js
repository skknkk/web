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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("./users.model");
const add_role_dto_1 = require("./dto/add-role.dto");
const ban_user_dto_1 = require("./dto/ban-user.dto");
const delete_user_dto_1 = require("./dto/delete-user.dto");
const remove_role_dto_1 = require("./dto/remove-role.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAll() {
        return this.usersService.getAllUsers();
    }
    delete(userDto) {
        return this.usersService.deleteUser(userDto);
    }
    addRole(dto) {
        return this.usersService.addRole(dto);
    }
    removeRole(dto) {
        return this.usersService.removeRole(dto);
    }
    ban(dto) {
        return this.usersService.ban(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить всех пользователей' }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'number', example: 1 },
                    email: { type: 'string', example: 'example@mail.com' },
                    password: { type: 'string', example: '$2a$04$sH2M2Y8TkVe.pRLtnVU9EiV8BhIuA1h5CK' },
                    banned: { type: 'boolean', example: false },
                    banReason: { type: typeof null, example: null },
                    roles: { type: 'array', items: {
                            type: 'object', properties: {
                                value: { type: 'string', example: 'USER' }
                            }
                        } },
                    basket: { type: 'object', properties: {
                            id: { type: 'number', example: 1 },
                            userId: { type: 'number', example: 1 }
                        } },
                }
            }
        }
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Пользователь не найден' }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_user_dto_1.DeleteUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Выдать роль пользователю' }),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiResponse)({ status: 201, type: add_role_dto_1.AddRoleDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Пользователь или роль не найдены' }),
    (0, common_1.Put)('/role/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Отнять роль у пользователя' }),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiResponse)({ status: 201, type: remove_role_dto_1.RemoveRoleDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Пользователь или роль не найдены' }),
    (0, common_1.Put)('/role/remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [remove_role_dto_1.RemoveRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Забанить пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_model_1.User }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Пользователь не найден' }),
    (0, common_1.Patch)('/ban'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ban_user_dto_1.BanUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "ban", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Пользователи'),
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map