import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../main";

const TypeBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
            }}
        >
            {device.types.map((type) => {
                const isActive = type.id === device.selectedType?.id;

                return (
                    <div
                        key={type.id}
                        onClick={() => device.setSelectedType(type)}
                        style={{
                            cursor: "pointer",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            background: isActive ? "#dcdcdc" : "#f5f5f5",
                            color: "#333",
                            border: "1px solid #e0e0e0",
                            transition: "0.2s",
                        }}
                        onMouseEnter={(e) => {
                            if (!isActive)
                                e.currentTarget.style.background = "#eaeaea";
                        }}
                        onMouseLeave={(e) => {
                            if (!isActive)
                                e.currentTarget.style.background = "#f5f5f5";
                        }}
                    >
                        {type.name}
                    </div>
                );
            })}
        </div>
    );
});

export default TypeBar;
