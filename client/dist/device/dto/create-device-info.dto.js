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
exports.CreateDeviceInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDeviceInfoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Идентификатор товара' }),
    (0, class_validator_1.IsInt)({ message: 'Должно быть целым числом' }),
    __metadata("design:type", Number)
], CreateDeviceInfoDto.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Оперативная память', description: 'Характеристика' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateDeviceInfoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8 Гб', description: 'Описание характеристики' }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreateDeviceInfoDto.prototype, "description", void 0);
exports.CreateDeviceInfoDto = CreateDeviceInfoDto;
//# sourceMappingURL=create-device-info.dto.js.map