import { Model } from "sequelize-typescript";
import { Device } from "./device.model";
interface DeviceInfoCreationAttrs {
    title: string;
    description: string;
    deviceId: number;
}
export declare class DeviceInfo extends Model<DeviceInfo, DeviceInfoCreationAttrs> {
    id: number;
    title: string;
    description: string;
    deviceId: number;
    device: Device;
}
export {};
