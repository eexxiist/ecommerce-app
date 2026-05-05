import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../main";

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "16px",
            }}
        >
            {device.brands?.map((brand) => {
                const isActive = brand.id === device.selectedBrand?.id;

                return (
                    <div
                        key={brand.id}
                        onClick={() => device.setSelectedBrand(brand)}
                        style={{
                            cursor: "pointer",
                            padding: "6px 12px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            background: isActive ? "#dcdcdc" : "#f1f1f1",
                            color: "#333",
                            border: "1px solid #e0e0e0",
                            transition: "0.2s",
                            userSelect: "none",
                        }}
                        onMouseEnter={(e) => {
                            if (!isActive)
                                e.currentTarget.style.background = "#e6e6e6";
                        }}
                        onMouseLeave={(e) => {
                            if (!isActive)
                                e.currentTarget.style.background = "#f1f1f1";
                        }}
                    >
                        {brand.name}
                    </div>
                );
            })}
        </div>
    );
});

export default BrandBar;
