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
exports.DeviceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const device_service_1 = require("./device.service");
const brand_model_1 = require("./brand.model");
const create_brand_dto_1 = require("./dto/create-brand.dto");
const update_brand_dto_1 = require("./dto/update-brand.dto");
const create_type_dto_1 = require("./dto/create-type.dto");
const type_model_1 = require("./type.model");
const update_type_dto_1 = require("./dto/update-type.dto");
const create_device_info_dto_1 = require("./dto/create-device-info.dto");
const device_info_model_1 = require("./device-info.model");
const create_device_dto_1 = require("./dto/create-device.dto");
const device_model_1 = require("./device.model");
const update_device_info_dto_1 = require("./dto/update-device-info.dto");
const update_device_dto_1 = require("./dto/update-device.dto");
const rating_model_1 = require("../rating/rating.model");
const create_rating_dto_1 = require("../rating/dto/create-rating.dto");
const rating_service_1 = require("../rating/rating.service");
const delete_rating_dto_1 = require("../rating/dto/delete-rating.dto");
const update_rating_dto_1 = require("../rating/dto/update-rating.dto");
const platform_express_1 = require("@nestjs/platform-express");
const optionalFile_dto_1 = require("./dto/optionalFile.dto");
let DeviceController = class DeviceController {
    constructor(deviceService, ratingService) {
        this.deviceService = deviceService;
        this.ratingService = ratingService;
    }
    createBrand(brandDto) {
        return this.deviceService.createBrand(brandDto);
    }
    getAllBrands() {
        return this.deviceService.getAllBrands();
    }
    deleteBrand(brandId) {
        return this.deviceService.deleteBrand(brandId);
    }
    updateBrand(brandId, brandDto) {
        return this.deviceService.updateBrand(brandId, brandDto);
    }
    createType(typeDto) {
        return this.deviceService.createType(typeDto);
    }
    getAllTypes() {
        return this.deviceService.getAllTypes();
    }
    deleteType(typeId) {
        return this.deviceService.deleteType(typeId);
    }
    updateType(typeId, typeDto) {
        return this.deviceService.updateType(typeId, typeDto);
    }
    createDeviceInfo(deviceInfoDto) {
        return this.deviceService.createDeviceInfo(deviceInfoDto);
    }
    getDeviceInfoByDeviceId(deviceId) {
        return this.deviceService.getDeviceInfoByDeviceId(deviceId);
    }
    deleteDeviceInfo(deviceInfoId) {
        return this.deviceService.deleteDeviceInfo(deviceInfoId);
    }
    updateDeviceInfo(deviceId, title, dto) {
        return this.deviceService.updateDeviceInfo(deviceId, title, dto);
    }
    createDevice(deviceDto, img) {
        return this.deviceService.createDevice(deviceDto, img);
    }
    getAllDevices() {
        return this.deviceService.getAllDevices();
    }
    getDeviceById(deviceId) {
        return this.deviceService.getDeviceById(deviceId);
    }
    deleteDevice(deviceId) {
        return this.deviceService.deleteDevice(deviceId);
    }
    updateDevice(deviceId, updateDeviceDto, img) {
        if (!img) {
            return this.deviceService.updateDevice(deviceId, updateDeviceDto);
        }
        return this.deviceService.updateDevice(deviceId, updateDeviceDto, img);
    }
    rateDevice(deviceId, rateDto) {
        return this.ratingService.createRating(deviceId, rateDto);
    }
    unRateDevice(deviceId, rateDto) {
        return this.ratingService.deleteRating(deviceId, rateDto);
    }
    reRateDevice(deviceId, rateDto) {
        return this.ratingService.updateRating(deviceId, rateDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание бренда' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: brand_model_1.Brand }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Данный бренд уже существует' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/brand'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brand_dto_1.CreateBrandDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "createBrand", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все бренды' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [brand_model_1.Brand] }),
    (0, common_1.Get)('/brand'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getAllBrands", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить бренд' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: brand_model_1.Brand }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Бренд не найден' }),
    (0, common_1.Delete)('/brand/:brandId'),
    __param(0, (0, common_1.Param)('brandId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "deleteBrand", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновить бренд' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: brand_model_1.Brand }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Бренд не найден или бренд с таким именем уже существует' }),
    (0, common_1.Patch)('/brand/:brandId'),
    __param(0, (0, common_1.Param)('brandId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_brand_dto_1.UpdateBrandDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "updateBrand", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание типа' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: type_model_1.Type }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Данный тип уже существует' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/type'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_type_dto_1.CreateTypeDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "createType", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все типы' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [type_model_1.Type] }),
    (0, common_1.Get)('/type'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getAllTypes", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить тип' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: type_model_1.Type }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Тип не найден' }),
    (0, common_1.Delete)('/type/:typeId'),
    __param(0, (0, common_1.Param)('typeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "deleteType", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновить тип' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: type_model_1.Type }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Тип не найден или тип с таким именем уже существует' }),
    (0, common_1.Patch)('/type/:typeId'),
    __param(0, (0, common_1.Param)('typeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_type_dto_1.UpdateTypeDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "updateType", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание записи информации о товаре' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: device_info_model_1.DeviceInfo }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Такого товара не существует или у данного товара уже есть такая характеристика' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/deviceInfo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_device_info_dto_1.CreateDeviceInfoDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "createDeviceInfo", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все записи информации о товаре' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [device_info_model_1.DeviceInfo] }),
    (0, common_1.Get)('/deviceInfo/:deviceId'),
    __param(0, (0, common_1.Param)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getDeviceInfoByDeviceId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить запись информации о товаре' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: device_info_model_1.DeviceInfo }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Запись не найдена' }),
    (0, common_1.Delete)('/deviceInfo/:deviceInfoId'),
    __param(0, (0, common_1.Param)('deviceInfoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "deleteDeviceInfo", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновить запись информации о товаре' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: device_info_model_1.DeviceInfo }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Запись не найдена' }),
    (0, common_1.Patch)('/:deviceId/title/:title'),
    __param(0, (0, common_1.Param)('deviceId')),
    __param(1, (0, common_1.Param)('title')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, update_device_info_dto_1.UpdateDeviceInfoDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "updateDeviceInfo", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание товара' }),
    (0, swagger_1.ApiResponse)({ status: 200,
        schema: {
            type: 'object',
            properties: {
                rating: { type: 'number', example: 3.5 },
                id: { type: 'number', example: 1 },
                name: { type: 'string', example: 'Iphone 10' },
                price: { type: 'number', example: 49990 },
                typeId: { type: 'number', example: 1 },
                brandId: { type: 'number', example: 1 },
                img: { type: 'string', example: '1.jpg' }
            }
        } }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Товар с таким названием уже существует или ' +
            'бренда с таким идентификатором не существует или типа с таким идентификатором не существует или изображение не загружено' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', example: 'Iphone 10' },
                price: { type: 'number', example: 49990 },
                img: { type: 'string', format: 'binary' },
                typeId: { type: 'number', example: 1 },
                brandId: { type: 'number', example: 1 }
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_device_dto_1.CreateDeviceDto,
        optionalFile_dto_1.OptionalFileDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "createDevice", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все товары' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [device_model_1.Device] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getAllDevices", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить информацию о товаре' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: device_model_1.Device }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Такого товара не существует' }),
    (0, common_1.Get)('/:deviceId'),
    __param(0, (0, common_1.Param)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getDeviceById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить товар' }),
    (0, swagger_1.ApiResponse)({ status: 200,
        schema: {
            type: 'object',
            properties: {
                rating: { type: 'number', example: 3.5 },
                id: { type: 'number', example: 1 },
                name: { type: 'string', example: 'Iphone 10' },
                price: { type: 'number', example: 49990 },
                typeId: { type: 'number', example: 1 },
                brandId: { type: 'number', example: 1 },
                img: { type: 'string', example: '1.jpg' }
            }
        } }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Такого товара не существует' }),
    (0, common_1.Delete)('/:deviceId'),
    __param(0, (0, common_1.Param)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "deleteDevice", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновить товар' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: device_model_1.Device }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Товар не найден или товар с таким названием уже существует или ' +
            'бренда с таким идентификатором не существует или типа с таким идентификатором не существует' }),
    (0, common_1.Patch)('/:deviceId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', example: 'Iphone 10' },
                price: { type: 'number', example: 49990 },
                img: { type: 'string', format: 'binary' },
                typeId: { type: 'number', example: 1 },
                brandId: { type: 'number', example: 1 }
            },
        },
    }),
    __param(0, (0, common_1.Param)('deviceId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_device_dto_1.UpdateDeviceDto,
        optionalFile_dto_1.OptionalFileDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "updateDevice", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Оценить товар' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: rating_model_1.Rating }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Данный товар уже оценен или пользователь или товар не найдены' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/:deviceId/rate'),
    __param(0, (0, common_1.Param)('deviceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_rating_dto_1.CreateRatingDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "rateDevice", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удалить оценку' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: rating_model_1.Rating }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Данный товар еще не оценен или пользователь или товар не найдены' }),
    (0, common_1.Delete)('/:deviceId/rate'),
    __param(0, (0, common_1.Param)('deviceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, delete_rating_dto_1.DeleteRatingDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "unRateDevice", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Обновить оценку' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Данный товар еще не оценен или пользователь или товар не найдены' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: rating_model_1.Rating }),
    (0, common_1.Patch)('/:deviceId/rate'),
    __param(0, (0, common_1.Param)('deviceId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_rating_dto_1.UpdateRatingDto]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "reRateDevice", null);
DeviceController = __decorate([
    (0, swagger_1.ApiTags)('Товары'),
    (0, common_1.Controller)('/device'),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => rating_service_1.RatingService))),
    __metadata("design:paramtypes", [device_service_1.DeviceService,
        rating_service_1.RatingService])
], DeviceController);
exports.DeviceController = DeviceController;
//# sourceMappingURL=device.controller.js.map