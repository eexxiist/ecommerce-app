import { Navbar, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../main";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <Navbar
            style={{
                background: "#f5f5f7",
                padding: "12px 0",
                borderBottom: "1px solid #e0e0e0",
            }}
        >
            <Container className="d-flex justify-content-between align-items-center">
                
                <NavLink
                    to={SHOP_ROUTE}
                    style={{
                        color: "#333",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "18px",
                    }}
                >
                    КупиДевайс
                </NavLink>

                
                <div className="d-flex align-items-center gap-2">
                    {user.isAuth ? (
                        <>
                            <Button
                                variant="light"
                                size="sm"
                                onClick={() => navigate(ADMIN_ROUTE)}
                                style={{
                                    background: "#eaeaea",
                                    border: "none",
                                    color: "#333",
                                    borderRadius: "6px",
                                    padding: "5px 12px",
                                }}
                            >
                                Админ
                            </Button>

                            <Button
                                variant="light"
                                size="sm"
                                onClick={logOut}
                                style={{
                                    background: "#dcdcdc",
                                    border: "none",
                                    color: "#333",
                                    borderRadius: "6px",
                                    padding: "5px 12px",
                                }}
                            >
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <Button
                            variant="light"
                            size="sm"
                            onClick={() => navigate(LOGIN_ROUTE)}
                            style={{
                                background: "#eaeaea",
                                border: "none",
                                color: "#333",
                                borderRadius: "6px",
                                padding: "5px 14px",
                            }}
                        >
                            Войти
                        </Button>
                    )}
                </div>
            </Container>
        </Navbar>
    );
});

export default NavBar;
