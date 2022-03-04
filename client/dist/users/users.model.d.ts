import { Model } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { Basket } from "../basket/basket.model";
import { Rating } from "../rating/rating.model";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    basket: Basket;
    rating: Rating[];
}
export {};
