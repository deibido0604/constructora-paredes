import { Layout } from "antd";

const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Footer style={{ textAlign: "center", background: "#000", color: "#fff" }}>
      ©{new Date().getFullYear()} Paredes Construcciones - Todos los derechos reservados
    </Footer>
  );
};

export default FooterSection;
