import { Basket } from "./basket.model";
import { CreateBasketDto } from "./dto/create-basket.dto";
import { AddDeviceDto } from "./dto/add-device.dto";
import { RemoveDeviceDto } from "./dto/remove-device.dto";
import { UsersService } from "../users/users.service";
import { DeviceService } from "../device/device.service";
import { BasketDevice } from "../device/basket-device.model";
export declare class BasketService {
    private basketRepository;
    private basketDeviceRepository;
    private deviceService;
    private userService;
    constructor(basketRepository: typeof Basket, basketDeviceRepository: typeof BasketDevice, deviceService: DeviceService, userService: UsersService);
    createBasket(dto: CreateBasketDto): Promise<Basket>;
    private getBasketByUserId;
    myGetBasketByUserId(userId: number): Promise<Basket>;
    getAllBaskets(): Promise<Basket[]>;
    deleteBasket(userId: number): Promise<Basket>;
    private getBasketDevice;
    addDevice(addDeviceDto: AddDeviceDto): Promise<void>;
    removeDevice(removeDeviceDto: RemoveDeviceDto): Promise<void>;
}
