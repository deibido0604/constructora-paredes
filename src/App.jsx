import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Header";
import FooterSection from "./components/Footer";

import Home from "./pages/Home";
import Residencial from "./pages/Residencial";
import Conocenos from "./pages/Conocenos";
import Contactanos from "./pages/Contactanos";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderNav />
      <Content style={{ padding: "0" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residencial" element={<Residencial />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/contacto" element={<Contactanos />} />
        </Routes>
      </Content>
      <FooterSection />
    </Layout>
  );
}

export default App;