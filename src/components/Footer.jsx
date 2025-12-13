import { Layout, Row, Col } from "antd";
import { FacebookFilled, InstagramFilled, PhoneFilled, MailFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const FooterSection = () => {
  return (
    <Footer
      style={{
        background: "#0d0d0d",
        color: "#fff",
        padding: "3rem 1.5rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Row
          gutter={[24, 32]}
          justify="center"
          style={{
            textAlign: "center",
            margin: 0,
            width: "100%",
          }}
        >
          <Col xs={24} sm={24} md={8}>
            <h3 style={{ color: "#0cb7f2", marginBottom: "1rem" }}>
              Paredes Construcciones HN
            </h3>

            <p
              style={{
                color: "#ccc",
                maxWidth: "280px",
                margin: "0 auto",
                wordBreak: "break-word",
              }}
            >
              Empresa hondureña dedicada a la construcción, remodelación y mantenimiento profesional.
            </p>

            <div style={{ fontSize: "24px", marginTop: "1rem" }}>
              <a
                href="https://www.facebook.com/share/19T9PFwjQF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", margin: "0 10px" }}
                aria-label="Facebook Paredes Construcciones HN"
              >
                <FacebookFilled />
              </a>
              {/* <a href="#" style={{ color: "#fff", margin: "0 10px" }}>
                <InstagramFilled />
              </a> */}
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4 style={{ color: "#fff", marginBottom: "1rem" }}>Enlaces</h4>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                color: "#ccc",
                lineHeight: 1.9,
                textAlign: "center",
              }}
            >
              <li><Link to="/" style={{ color: "#ccc" }}>Inicio</Link></li>
              <li><Link to="/conocenos" style={{ color: "#ccc" }}>Sobre Nosotros</Link></li>
              <li><Link to="/residencial" style={{ color: "#ccc" }}>Servicios</Link></li>
              <li><Link to="/contacto" style={{ color: "#ccc" }}>Contáctanos</Link></li>
            </ul>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <h4 style={{ color: "#fff", marginBottom: "1rem" }}>Contacto</h4>

            <p style={{ color: "#ccc", marginBottom: "0.5rem" }}>
              <PhoneFilled /> +504 9591-3714
            </p>
            <p style={{ color: "#ccc", marginBottom: "0.5rem" }}>
              <MailFilled /> paredesconstrucciones61@gmail.com
            </p>
            <p style={{ color: "#ccc" }}>📍 Honduras</p>
          </Col>
        </Row>

        <div
          style={{
            marginTop: "2rem",
            textAlign: "center",
            color: "#888",
            fontSize: "14px",
            width: "100%",
          }}
        >
          © {new Date().getFullYear()} Paredes Construcciones HN — Todos los derechos reservados.
        </div>
      </div>
    </Footer>
  );
};

export default FooterSection;

