import { Model } from "sequelize-typescript";
import { Device } from "../device/device.model";
import { User } from "../users/users.model";
interface RatingCreationAttrs {
    rating: number;
    userId: number;
    deviceId: number;
}
export declare class Rating extends Model<Rating, RatingCreationAttrs> {
    id: number;
    rating: number;
    userId: number;
    deviceId: number;
    user: User;
    device: Device;
}
export {};
