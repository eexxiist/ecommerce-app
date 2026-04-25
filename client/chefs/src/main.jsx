import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserStore from "./store/userStore";
import DeviceStore from "./store/deviceStore";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Context.Provider
        value={{
            user: new UserStore(),
            device: new DeviceStore(),
        }}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>
);
