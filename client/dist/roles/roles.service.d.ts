import { Role } from "./roles.model";
import { CreateRoleDto } from "./dto/create-role.dto";
import { DeleteRoleDto } from "./dto/delete-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    createRole(dto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    deleteRole(deleteRoleDto: DeleteRoleDto): Promise<void>;
    updateRole(updateRoleDto: UpdateRoleDto, roleValue: string): Promise<Role>;
}
