import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { fetchBrands, fetchDevice, fetchTypes } from "../http/DeviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
        fetchBrands().then((data) => device.setBrands(data));
    }, []);

    useEffect(() => {
        fetchDevice(
            device.selectedType?.id,
            device.selectedBrand?.id,
            device.page,
            6
        ).then((data) => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
        });
    }, [device.page, device.selectedType, device.selectedBrand]);

    return (
        <Container style={{ marginTop: "24px" }}>
            <div style={{ display: "flex", gap: "24px" }}>
                <div
                    style={{
                        width: "220px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <TypeBar />
                </div>

                <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: "16px" }}>
                        <BrandBar />
                    </div>

                    <DeviceList />

                    <div style={{ marginTop: "24px" }}>
                        <Pages />
                    </div>
                </div>
            </div>
        </Container>
    );
});

export default Shop;
