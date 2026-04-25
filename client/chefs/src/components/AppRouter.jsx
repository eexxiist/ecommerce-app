import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRouter, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../main";

const AppRouter = () => {
    const { user } = useContext(Context);
    console.log(user);
    return (
        <Routes>
            {user.isAuth &&
                authRouter.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
