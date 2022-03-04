import { Model } from "sequelize-typescript";
import { Basket } from "../basket/basket.model";
import { DeviceInfo } from "./device-info.model";
import { Type } from "./type.model";
import { Brand } from "./brand.model";
import { Rating } from "../rating/rating.model";
interface DeviceCreationAttrs {
    name: string;
    price: number;
    img: string;
    brandId: number;
    typeId: number;
}
export declare class Device extends Model<Device, DeviceCreationAttrs> {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
    brandId: number;
    typeId: number;
    baskets: Basket[];
    deviceInfo: DeviceInfo[];
    ratings: Rating[];
    brand: Brand;
    type: Type;
}
export {};
