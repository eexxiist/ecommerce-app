import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/DeviceApi";

const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();

    useEffect(() => {
        fetchOneDevice(id).then((data) => setDevice(data));
    }, []);

    return (
        <Container style={{ marginTop: "32px", maxWidth: "1000px" }}>
            <Row style={{ gap: "32px" }}>
                <Col md={6}>
                    <div
                        style={{
                            background: "#f5f5f5",
                            borderRadius: "12px",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "400px",
                        }}
                    >
                        <img
                            src={import.meta.env.VITE_API_URL + device.img}
                            alt={device.name}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </Col>

                <Col md={5}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                        }}
                    >
                        <h2 style={{ color: "#333" }}>{device.name}</h2>

                        <div style={{ color: "#777", fontSize: "14px" }}>
                            Рейтинг: {device.rating}
                        </div>

                        <div
                            style={{
                                fontSize: "24px",
                                fontWeight: 500,
                                marginTop: "10px",
                            }}
                        >
                            {device.price} ₽
                        </div>

                        <Button
                            style={{
                                marginTop: "10px",
                                background: "#e0e0e0",
                                border: "none",
                                color: "#333",
                                borderRadius: "8px",
                                padding: "10px",
                            }}
                        >
                            Добавить в корзину
                        </Button>
                    </div>
                </Col>
            </Row>

            <div style={{ marginTop: "40px" }}>
                <h4 style={{ marginBottom: "16px" }}>Характеристики</h4>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    {device.info.map((info) => (
                        <div
                            key={info.id}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "1px solid #eee",
                                paddingBottom: "6px",
                                fontSize: "14px",
                            }}
                        >
                            <span style={{ color: "#666" }}>{info.title}</span>
                            <span style={{ color: "#333" }}>
                                {info.description}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default DevicePage;
