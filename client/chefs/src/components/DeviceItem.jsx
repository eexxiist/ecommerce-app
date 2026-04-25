import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const history = useNavigate();
    return (
        <Col className="mt-3" md={3}>
            <Card
                style={{ width: 150, cursor: "pointer" }}
                border={"light"}
                onClick={() => history(DEVICE_ROUTE + "/" + device.id)}
            >
                <Image width={150} height={150} src={device.img} />
                <div className=" mt-2 d-flex justify-content-between align-items-center">
                    <div className="text-black-50">Samsung...</div>
                    <div className="d-flex">
                        <div>{device.rating}</div>
                        <Image width={22} height={22} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
