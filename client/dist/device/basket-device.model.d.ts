import { Model } from "sequelize-typescript";
export declare class BasketDevice extends Model<BasketDevice> {
    id: number;
    basketId: number;
    deviceId: number;
    deviceCnt: number;
}
