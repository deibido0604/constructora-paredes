import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "./App";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          // Colores principales
          colorPrimary: "#0cb7f2",      // Azul principal
          colorInfo: "#0cb7f2",         // Info usa el azul principal
          colorSuccess: "#52c41a",      // Verde para éxito
          colorWarning: "#faad14",      // Amarillo para advertencia
          colorError: "#ff4d4f",        // Rojo para error
          
          // Colores de texto
          colorTextBase: "#1a1a1a",     // Negro para texto principal
          colorTextSecondary: "#595959", // Gris oscuro para texto secundario
          colorTextTertiary: "#8c8c8c", // Gris medio para texto terciario
          
          // Fondos
          colorBgBase: "#ffffff",       // Fondo blanco
          colorBgContainer: "#ffffff",  // Contenedores blancos
          colorBgLayout: "#f5f5f5",     // Fondo de layout gris claro
          colorBgElevated: "#ffffff",   // Elementos elevados blancos
          
          // Bordes
          colorBorder: "#d9d9d9",
          colorBorderSecondary: "#f0f0f0",
          
          // Estados hover/active
          colorPrimaryHover: "#53d4ff",
          colorPrimaryActive: "#008ec4",
          controlOutline: "rgba(12, 183, 242, 0.1)",
          
          // Tipografía
          fontSize: 14,
          borderRadius: 6,
          wireframe: false,
        },
        components: {
          // Configuración del Layout
          Layout: {
            headerBg: "#ffffff",
            bodyBg: "#ffffff",
            footerBg: "#1a1a1a",
            headerColor: "#1a1a1a",
            siderBg: "#ffffff",
          },
          
          // Configuración de Botones
          Button: {
            colorPrimary: "#0cb7f2",
            colorPrimaryHover: "#53d4ff",
            colorPrimaryActive: "#008ec4",
            defaultShadow: "0 2px 0 rgba(12, 183, 242, 0.1)",
            primaryShadow: "0 2px 0 rgba(12, 183, 242, 0.1)",
          },
          
          // Configuración del Menu
          Menu: {
            itemColor: "#1a1a1a",
            itemHoverColor: "#0cb7f2",
            itemSelectedColor: "#0cb7f2",
            itemSelectedBg: "#def7ff",
            itemActiveBg: "#def7ff",
            subMenuItemBg: "#ffffff",
          },
          
          // Configuración de Card
          Card: {
            colorBgContainer: "#ffffff",
            colorBorderSecondary: "#f0f0f0",
          },
          
          // Configuración de Input
          Input: {
            colorBgContainer: "#ffffff",
            colorBorder: "#d9d9d9",
            hoverBorderColor: "#53d4ff",
            activeBorderColor: "#0cb7f2",
            activeShadow: "0 0 0 2px rgba(12, 183, 242, 0.2)",
          },
          
          // Configuración de Table
          Table: {
            headerBg: "#def7ff",
            headerColor: "#1a1a1a",
            rowHoverBg: "#f0fdff",
            borderColor: "#e8e8e8",
          },
          
          // Configuración de Steps
          Steps: {
            colorPrimary: "#0cb7f2",
            colorTextDescription: "#595959",
          },
          
          // Configuración de Tabs
          Tabs: {
            colorPrimary: "#0cb7f2",
            itemActiveColor: "#0cb7f2",
            itemSelectedColor: "#0cb7f2",
            inkBarColor: "#0cb7f2",
          },
          
          // Configuración de Alert
          Alert: {
            colorInfoBg: "#def7ff",
            colorInfoBorder: "#8fe3ff",
            colorInfo: "#1a1a1a",
          },
          
          // Configuración de Notification
          Notification: {
            colorInfoBg: "#def7ff",
            colorInfoBorder: "#8fe3ff",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
);