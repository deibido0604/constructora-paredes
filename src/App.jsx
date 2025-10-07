import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "./components/Header";
import FooterSection from "./components/Footer";

import Home from "./pages/Home";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderNav />
      <Content style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Content>
      <FooterSection />
    </Layout>
  );
}

export default App;
