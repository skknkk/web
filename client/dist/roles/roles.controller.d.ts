import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Role } from "./roles.model";
import { DeleteRoleDto } from "./dto/delete-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(roleDto: CreateRoleDto): Promise<Role>;
    getAll(): Promise<Role[]>;
    delete(roleDto: DeleteRoleDto): Promise<void>;
    updateRole(value: string, updateRoleDto: UpdateRoleDto): Promise<Role>;
}
