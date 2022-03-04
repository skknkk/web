import { Model } from "sequelize-typescript";
import { Device } from "./device.model";
interface TypeInfoCreationAttrs {
    name: string;
}
export declare class Type extends Model<Type, TypeInfoCreationAttrs> {
    id: number;
    name: string;
    device: Device[];
}
export {};
