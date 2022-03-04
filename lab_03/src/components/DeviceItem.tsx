import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/const";

const DeviceItem = ({device}:any) => {
    const history = useHistory()
    return (
        <Col md={3} className={"m-2"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 250, height: 310, cursor: 'pointer',}} border={"transparent"}>
                <Image width={236} height={236} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 m-2 d-flex justify-content-between align-items-center">
                    <div>{device.price} руб.</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div className="m-2">{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
