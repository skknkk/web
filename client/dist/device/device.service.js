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
exports.DeviceService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const brand_model_1 = require("./brand.model");
const type_model_1 = require("./type.model");
const device_info_model_1 = require("./device-info.model");
const device_model_1 = require("./device.model");
const rating_service_1 = require("../rating/rating.service");
const files_service_1 = require("../files/files.service");
let DeviceService = class DeviceService {
    constructor(brandRepository, typeRepository, deviceInfoRepository, deviceRepository, ratingService, filesService) {
        this.brandRepository = brandRepository;
        this.typeRepository = typeRepository;
        this.deviceInfoRepository = deviceInfoRepository;
        this.deviceRepository = deviceRepository;
        this.ratingService = ratingService;
        this.filesService = filesService;
    }
    async createBrand(dto) {
        const check = await this.getBrandByName(dto.name);
        if (check) {
            throw new common_1.HttpException('Данный бренд уже существует', common_1.HttpStatus.NOT_FOUND);
        }
        const brand = await this.brandRepository.create(dto);
        return brand;
    }
    async getBrandByBrandId(id) {
        const brand = await this.brandRepository.findByPk(id);
        return brand;
    }
    async getBrandByName(name) {
        const brand = await this.brandRepository.findOne({ where: { name } });
        return brand;
    }
    async getAllBrands() {
        const brands = await this.brandRepository.findAll();
        return brands;
    }
    async deleteBrand(id) {
        const brand = await this.getBrandByBrandId(id);
        if (!brand) {
            throw new common_1.HttpException('Бренд не найден', common_1.HttpStatus.NOT_FOUND);
        }
        await brand.destroy();
        return brand;
    }
    async updateBrand(id, dto) {
        const brandById = await this.getBrandByBrandId(id);
        if (!brandById) {
            throw new common_1.HttpException('Бренд не найден', common_1.HttpStatus.NOT_FOUND);
        }
        const brandByName = await this.getBrandByName(dto.name);
        if (brandByName) {
            throw new common_1.HttpException('Бренд с таким именем уже существует', common_1.HttpStatus.NOT_FOUND);
        }
        await brandById.update({ name: dto.name });
        return brandById;
    }
    async createType(dto) {
        const check = await this.getTypeByName(dto.name);
        if (check) {
            throw new common_1.HttpException('Данный тип уже существует', common_1.HttpStatus.NOT_FOUND);
        }
        const type = await this.typeRepository.create(dto);
        return type;
    }
    async getTypeByTypeId(id) {
        const type = await this.typeRepository.findByPk(id);
        return type;
    }
    async getTypeByName(name) {
        const type = await this.typeRepository.findOne({ where: { name } });
        return type;
    }
    async getAllTypes() {
        const types = await this.typeRepository.findAll();
        return types;
    }
    async deleteType(id) {
        const type = await this.getTypeByTypeId(id);
        if (!type) {
            throw new common_1.HttpException('Тип не найден', common_1.HttpStatus.NOT_FOUND);
        }
        await type.destroy();
        return type;
    }
    async updateType(id, dto) {
        const typeById = await this.getTypeByTypeId(id);
        if (!typeById) {
            throw new common_1.HttpException('Тип не найден', common_1.HttpStatus.NOT_FOUND);
        }
        const typeByName = await this.getTypeByName(dto.name);
        if (typeByName) {
            throw new common_1.HttpException('Тип с таким именем уже существует', common_1.HttpStatus.NOT_FOUND);
        }
        await typeById.update({ name: dto.name });
        return typeById;
    }
    async createDeviceInfo(dto) {
        const checkDevice = await this.getDeviceById(dto.deviceId);
        if (!checkDevice) {
            throw new common_1.HttpException('Такого товара не существует', common_1.HttpStatus.NOT_FOUND);
        }
        const check = await this.getDeviceInfoByDeviceIdAndTitle(dto.deviceId, dto.title);
        if (check) {
            throw new common_1.HttpException('У данного товара уже есть такая характеристика', common_1.HttpStatus.NOT_FOUND);
        }
        const deviceInfo = await this.deviceInfoRepository.create(dto);
        return deviceInfo;
    }
    async getDeviceInfoByDeviceIdAndTitle(deviceId, title) {
        const deviceInfo = await this.deviceInfoRepository.findOne({ where: { deviceId, title } });
        return deviceInfo;
    }
    async getDeviceInfoByDeviceInfoId(id) {
        const deviceInfo = await this.deviceInfoRepository.findByPk(id);
        return deviceInfo;
    }
    async getDeviceInfoByDeviceId(deviceId) {
        const deviceInfo = await this.deviceInfoRepository.findAll({ where: { deviceId } });
        return deviceInfo;
    }
    async getAllDeviceInfos() {
        const deviceInfos = await this.deviceInfoRepository.findAll();
        return deviceInfos;
    }
    async deleteDeviceInfo(id) {
        const deviceInfo = await this.getDeviceInfoByDeviceInfoId(id);
        if (!deviceInfo) {
            throw new common_1.HttpException('Запись не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        await deviceInfo.destroy();
        return deviceInfo;
    }
    async updateDeviceInfo(deviceId, title, dto) {
        const deviceInfo = await this.getDeviceInfoByDeviceIdAndTitle(deviceId, title);
        if (!deviceInfo) {
            throw new common_1.HttpException('Запись не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        await deviceInfo.update(dto);
        return deviceInfo;
    }
    async createDevice(dto, image) {
        const checkDevice = await this.getDeviceByName(dto.name);
        if (checkDevice) {
            throw new common_1.HttpException('Товар с таким названием уже существует', common_1.HttpStatus.NOT_FOUND);
        }
        const checkBrand = await this.getBrandByBrandId(dto.brandId);
        if (!checkBrand) {
            throw new common_1.HttpException('Бренда с таким идентификатором не существует', common_1.HttpStatus.NOT_FOUND);
        }
        const checkType = await this.getTypeByTypeId(dto.typeId);
        if (!checkType) {
            throw new common_1.HttpException('Типа с таким идентификатором не существует', common_1.HttpStatus.NOT_FOUND);
        }
        if (!image) {
            throw new common_1.HttpException('Изображение не загружено', common_1.HttpStatus.NOT_FOUND);
        }
        const fileName = await this.filesService.createFile(image);
        const device = await this.deviceRepository.create(Object.assign(Object.assign({}, dto), { img: fileName }));
        return device;
    }
    async getDeviceById(id) {
        const device = await this.deviceRepository.findByPk(id, { include: { all: true } });
        if (!device) {
            throw new common_1.HttpException('Такого товара не существует', common_1.HttpStatus.NOT_FOUND);
        }
        return device;
    }
    async getDeviceByName(name) {
        const device = await this.deviceRepository.findOne({ where: { name }, include: { all: true } });
        return device;
    }
    async getAllDevices() {
        const devices = await this.deviceRepository.findAll({ include: { all: true } });
        return devices;
    }
    async deleteDevice(id) {
        const deviceInfos = await this.getDeviceInfoByDeviceId(id);
        if (deviceInfos) {
            deviceInfos.forEach((value) => { value.destroy(); });
        }
        const device = await this.getDeviceById(id);
        if (!device) {
            throw new common_1.HttpException('Такого товара не существует', common_1.HttpStatus.NOT_FOUND);
        }
        await this.filesService.deleteFile(device.img);
        await device.destroy();
        return device;
    }
    async updateDevice(id, dto, image) {
        const deviceById = await this.getDeviceById(id);
        if (!deviceById) {
            throw new common_1.HttpException('Товар не найден', common_1.HttpStatus.NOT_FOUND);
        }
        if (dto.name) {
            const deviceByName = await this.getDeviceByName(dto.name);
            if (deviceByName) {
                throw new common_1.HttpException('Товар с таким названием уже существует', common_1.HttpStatus.NOT_FOUND);
            }
        }
        if (dto.brandId || dto.brandId == 0) {
            const brand = await this.getBrandByBrandId(dto.brandId);
            if (!brand || dto.brandId == 0) {
                throw new common_1.HttpException('Бренда с таким идентификатором не существует', common_1.HttpStatus.NOT_FOUND);
            }
        }
        if (dto.typeId || dto.typeId == 0) {
            const type = await this.getTypeByTypeId(dto.typeId);
            if (!type) {
                throw new common_1.HttpException('Типа с таким идентификатором не существует', common_1.HttpStatus.NOT_FOUND);
            }
        }
        if (image) {
            await this.filesService.deleteFile(deviceById.img);
            const fileName = await this.filesService.createFile(image);
            await deviceById.update(Object.assign(Object.assign({}, dto), { img: fileName }));
        }
        console.log(dto);
        await deviceById.update(dto);
        return await this.getDeviceById(deviceById.id);
    }
};
DeviceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(brand_model_1.Brand)),
    __param(1, (0, sequelize_1.InjectModel)(type_model_1.Type)),
    __param(2, (0, sequelize_1.InjectModel)(device_info_model_1.DeviceInfo)),
    __param(3, (0, sequelize_1.InjectModel)(device_model_1.Device)),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => rating_service_1.RatingService))),
    __metadata("design:paramtypes", [Object, Object, Object, Object, rating_service_1.RatingService,
        files_service_1.FilesService])
], DeviceService);
exports.DeviceService = DeviceService;
//# sourceMappingURL=device.service.js.map