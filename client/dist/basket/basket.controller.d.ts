import { BasketService } from "./basket.service";
import { Basket } from "./basket.model";
import { AddDeviceDto } from "./dto/add-device.dto";
import { RemoveDeviceDto } from "./dto/remove-device.dto";
export declare class BasketController {
    private basketService;
    constructor(basketService: BasketService);
    getByValue(userId: number): Promise<Basket>;
    addDevice(dto: AddDeviceDto): Promise<void>;
    removeDevice(dto: RemoveDeviceDto): Promise<void>;
}
