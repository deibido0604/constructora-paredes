import { Row, Col, Typography, Button } from "antd";
// import propuestaImg from "../assets/propuesta.png"; // aquí guardamos tu imagen en /src/assets/

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: "4rem 2rem", background: "#fff" }}>
      <Row gutter={[32, 32]} align="middle">
        {/* Texto */}
        <Col xs={24} md={12}>
          <Title level={2} style={{ color: "#1a1a1a", fontWeight: "bold" }}>
            NUESTRA PROPUESTA DE VALOR
          </Title>
          <Paragraph style={{ fontSize: "16px", lineHeight: "1.8em", color: "#1a1a1a" }}>
            Somos una empresa constructora que a través de los años se ha dedicado a la ejecución 
            de proyectos de Obras Civiles con alta calidad y ética profesional.
          </Paragraph>
          <Paragraph style={{ fontSize: "16px", lineHeight: "1.8em", color: "#1a1a1a" }}>
            Desde nuestros inicios hemos realizado proyectos con rapidez sin descuidar la calidad, 
            lo que nos ha valido para que importantes instituciones nos hayan tomado en cuenta 
            como proveedores.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            style={{
              marginTop: "1.5rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              background: "#0cb7f2",
              borderColor: "#0cb7f2"
            }}
          >
            CONOCER MÁS
          </Button>
        </Col>

        {/* Imagen */}
        {/* <Col xs={24} md={12}>
          <img
            src={propuestaImg}
            alt="Propuesta de valor"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Col> */}
      </Row>
    </div>
  );
};

export default Home;
