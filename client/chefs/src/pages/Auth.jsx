import React, { useContext, useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../main";

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();

    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response?.data?.message || "Ошибка");
        }
    };

    return (
        <Container
            style={{
                height: "calc(100vh - 60px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: "360px",
                    padding: "24px",
                    borderRadius: "12px",
                    background: "#f5f5f5",
                    border: "1px solid #e5e5e5",
                }}
            >
                <h4
                    style={{
                        marginBottom: "16px",
                        color: "#333",
                        textAlign: "center",
                    }}
                >
                    {isLogin ? "Вход" : "Регистрация"}
                </h4>

                <Form className="d-flex flex-column">
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        style={{
                            marginBottom: "10px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                        }}
                    />

                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Пароль"
                        style={{
                            marginBottom: "14px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                        }}
                    />

                    <div
                        style={{
                            fontSize: "13px",
                            color: "#666",
                            marginBottom: "12px",
                        }}
                    >
                        {isLogin ? (
                            <>
                                Нет аккаунта?{" "}
                                <NavLink
                                    to={REGISTRATION_ROUTE}
                                    style={{ color: "#444" }}
                                >
                                    Зарегистрироваться
                                </NavLink>
                            </>
                        ) : (
                            <>
                                Уже есть аккаунт?{" "}
                                <NavLink
                                    to={LOGIN_ROUTE}
                                    style={{ color: "#444" }}
                                >
                                    Войти
                                </NavLink>
                            </>
                        )}
                    </div>

                    <Button
                        onClick={click}
                        style={{
                            background: "#e0e0e0",
                            border: "none",
                            color: "#333",
                            borderRadius: "8px",
                            padding: "8px",
                        }}
                    >
                        {isLogin ? "Войти" : "Создать аккаунт"}
                    </Button>
                </Form>
            </div>
        </Container>
    );
});

export default Auth;
