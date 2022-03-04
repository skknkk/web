import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { BasketService } from "../basket/basket.service";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { RatingService } from "../rating/rating.service";
import { DeviceService } from "../device/device.service";
export declare class UsersService {
    private userRepository;
    private roleService;
    private basketService;
    private ratingService;
    private deviceService;
    constructor(userRepository: typeof User, roleService: RolesService, basketService: BasketService, ratingService: RatingService, deviceService: DeviceService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: number): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    removeRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<void>;
    deleteUser(dto: DeleteUserDto): Promise<void>;
}
