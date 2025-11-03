import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Header";
import FooterSection from "./components/Footer";

import Home from "./pages/Home";
import Residencial from "./pages/Residencial";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderNav />
      <Content style={{ padding: "0" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residencial" element={<Residencial />} />
        </Routes>
      </Content>
      <FooterSection />
    </Layout>
  );
}

export default App;