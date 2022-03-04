import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/const";
import Shop from "./pages/shop";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import auth from "./pages/auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },

    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: LOGIN_ROUTE,
        Component: auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: auth
    },
]