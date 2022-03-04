import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/const";



export default function Footer() {
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    return (
        <Box sx={{ width: '100%', position:'absolute', color: '#7F8382', left: 0, bottom: 0}}>
            <BottomNavigation
                style={{background: '#7F8382'}}
                showLabels
                onChange={(event, newValue) => {
                    alert("Ссылка временно недоступна\nПеренаправляю на главную страницу.\nЖмякай ОК, если согласен")
                    history.push(SHOP_ROUTE);
                }}
            >

                <BottomNavigationAction label="@solnishko_pvs"/>
                <BottomNavigationAction label="@skk4nkk"/>
            </BottomNavigation>
        </Box>
    );
}