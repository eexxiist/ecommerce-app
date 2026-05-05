import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../main";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
            }}
        >
            {device.devices.map((item) => (
                <DeviceItem key={item.id} device={item} />
            ))}
        </div>
    );
});

export default DeviceList;
