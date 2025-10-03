import { Layout, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./HeaderNav.css";
import headerLogo from '../assets/img/header.jpg';

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

    // Función para renderizar items del menú
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
                    </div>

                    {/* Menú de navegación para desktop - oculto en móvil */}
                    <nav className="main-nav desktop-menu">
                        {renderMenuItems()}
                    </nav>

                    {/* Botón de menú hamburguesa - solo visible en móvil */}
                    <Button 
                        className="hamburger-btn"
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={toggleDrawer}
                    />
                </div>
            </Header>

            {/* Drawer para móvil */}
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