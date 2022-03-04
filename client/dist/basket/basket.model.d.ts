import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Device } from "../device/device.model";
interface BasketCreationAttrs {
    userId: number;
}
export declare class Basket extends Model<Basket, BasketCreationAttrs> {
    id: number;
    userId: number;
    user: User;
    devices: Device[];
}
export {};
