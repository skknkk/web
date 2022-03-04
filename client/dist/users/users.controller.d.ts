import { UsersService } from "./users.service";
import { User } from "./users.model";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { DeleteUserDto } from "./dto/delete-user.dto";
import { RemoveRoleDto } from "./dto/remove-role.dto";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<User[]>;
    delete(userDto: DeleteUserDto): Promise<void>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    removeRole(dto: RemoveRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<void>;
}
