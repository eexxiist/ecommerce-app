import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    

    return (
        <Container
            style={{
                maxWidth: "500px",
                marginTop: "40px",
            }}
        >
            <div
                style={{
                    background: "#f5f5f5",
                    padding: "20px",
                    borderRadius: "12px",
                    border: "1px solid #e5e5e5",
                }}
            >
                <h5 style={{ marginBottom: "16px", color: "#333" }}>
                    Управление
                </h5>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <Button
                        onClick={() => setTypeVisible(true)}
                        style={{
                            background: "#eaeaea",
                            border: "none",
                            color: "#333",
                            borderRadius: "8px",
                        }}
                    >
                        Добавить тип
                    </Button>

                    <Button
                        onClick={() => setBrandVisible(true)}
                        style={{
                            background: "#eaeaea",
                            border: "none",
                            color: "#333",
                            borderRadius: "8px",
                        }}
                    >
                        Добавить бренд
                    </Button>

                    <Button
                        onClick={() => setDeviceVisible(true)}
                        style={{
                            background: "#eaeaea",
                            border: "none",
                            color: "#333",
                            borderRadius: "8px",
                        }}
                    >
                        Добавить устройство
                    </Button>
                </div>
            </div>

            <CreateBrand
                show={brandVisible}
                onHide={() => setBrandVisible(false)}
            />
            <CreateType
                show={typeVisible}
                onHide={() => setTypeVisible(false)}
            />
            <CreateDevice
                show={deviceVisible}
                onHide={() => setDeviceVisible(false)}
            />
        </Container>
    );
};

export default Admin;
