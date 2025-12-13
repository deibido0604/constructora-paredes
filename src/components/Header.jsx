import { Layout, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./HeaderNav.css";
import headerLogo from '../assets/logo/header.jpg';

const { Header } = Layout;

const HeaderNav = () => {
    const location = useLocation();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const getActiveClass = (path) => {
        return location.pathname === path ? "active" : "";
    };

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const menuItems = [
        { key: "/", label: "INICIO" },
        { key: "/conocenos", label: "CONOCENOS" },
        { key: "/residencial", label: "RESIDENCIAL" },
        { key: "/contacto", label: "CONTÁCTANOS" }
    ];

    const renderMenuItems = (isMobile = false) => {
        return menuItems.map(item => (
            <Link
                key={item.key}
                to={item.key}
                className={`${isMobile ? 'mobile-nav-item' : 'nav-item'} ${getActiveClass(item.key)}`}
                onClick={isMobile ? toggleDrawer : undefined}
            >
                {item.label}
            </Link>
        ));
    };

    return (
        <>
            <Header className="header-nav">
                <div className="nav-container">
                    {/* Logo */}
                    <div className="header-logo">
                        <img
                            src={headerLogo}
                            alt="PAREDES CONSTRUCCIONES"
                            className="logo-image"
                        />

                        <div className="biblical-container">
                            <span className="biblical-quote">
                                “Prosperados por la palabra.”
                            </span>
                            {/* <span className="biblical-verse">
                                Proverbios 16:3
                            </span> */}
                        </div>
                    </div>

                    <nav className="main-nav desktop-menu">
                        {renderMenuItems()}
                    </nav>

                    <Button
                        className="hamburger-btn"
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={toggleDrawer}
                    />
                </div>
            </Header>

            <Drawer
                title="Menú"
                placement="right"
                onClose={toggleDrawer}
                open={drawerVisible}
                bodyStyle={{ padding: '20px' }}
            >
                <nav className="mobile-nav">
                    {renderMenuItems(true)}
                </nav>
            </Drawer>
        </>
    );
};

export default HeaderNav;