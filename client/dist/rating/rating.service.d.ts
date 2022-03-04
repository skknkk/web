import { Rating } from "./rating.model";
import { CreateRatingDto } from "./dto/create-rating.dto";
import { UsersService } from "../users/users.service";
import { DeviceService } from "../device/device.service";
import { DeleteRatingDto } from "./dto/delete-rating.dto";
import { UpdateRatingDto } from "./dto/update-rating.dto";
export declare class RatingService {
    private ratingRepository;
    private usersService;
    private deviceService;
    constructor(ratingRepository: typeof Rating, usersService: UsersService, deviceService: DeviceService);
    createRating(deviceId: number, dto: CreateRatingDto): Promise<Rating>;
    getRatingByUserId(userId: number): Promise<Rating[]>;
    getRatingByDeviceId(deviceId: number): Promise<Rating[]>;
    getAllRatings(): Promise<Rating[]>;
    private getRatingByDeviceIdAndUserId;
    deleteRating(deviceId: number, dto: DeleteRatingDto): Promise<Rating>;
    updateRating(deviceId: number, dto: UpdateRatingDto): Promise<Rating>;
    calculateRating(deviceId: number): Promise<number>;
}
