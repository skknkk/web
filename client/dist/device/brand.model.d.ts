import { Model } from "sequelize-typescript";
import { Device } from "./device.model";
interface BrandInfoCreationAttrs {
    name: string;
}
export declare class Brand extends Model<Brand, BrandInfoCreationAttrs> {
    id: number;
    name: string;
    device: Device[];
}
export {};
