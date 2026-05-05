import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import star from "../assets/star.png";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className="mb-4">
            <div
                onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
                style={{
                    cursor: "pointer",
                    borderRadius: "12px",
                    padding: "12px",
                    background: "#f5f5f5",
                    border: "1px solid #e5e5e5",
                    transition: "0.2s",
                }}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#eeeeee")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#f5f5f5")
                }
            >
                <div
                    style={{
                        width: "100%",
                        height: "140px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "10px",
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

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "13px",
                        color: "#777",
                        marginBottom: "4px",
                    }}
                >
                    <span>{device.brand || "Бренд"}</span>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                        }}
                    >
                        <span>{device.rating}</span>
                        <img src={star} width={14} height={14} />
                    </div>
                </div>

                <div
                    style={{
                        fontSize: "14px",
                        color: "#333",
                        fontWeight: 500,
                        lineHeight: "1.3",
                    }}
                >
                    {device.name}
                </div>
            </div>
        </Col>
    );
};

export default DeviceItem;
