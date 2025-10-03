import { Row, Col, Typography, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
// import propuestaImg from "../assets/propuesta.png";

const { Title, Paragraph } = Typography;

const Home = () => {
  const navigate = useNavigate();

  const handleConocerMas = () => {
    navigate("/conocenos");
  };

  const handleServicioClick = () => {
    navigate("/residencial"); // Todos los servicios redirigen a /residencial
  };

  // Array de servicios
  const servicios = [
    "Casas",
    "Piscinas",
    "Fontanería",
    "Jardinería",
    "Electricidad",
    "Muebles",
    "Cerámica"
  ];

  return (
    <div>
      {/* Sección Propuesta de Valor */}
      <div style={{ 
        padding: "4rem 2rem", 
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh"
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          width: "100%"
        }}>
          <Row gutter={[48, 32]} align="middle" justify="center">
            <Col xs={24} md={12}>
              <Title 
                level={2} 
                style={{ 
                  color: "#1a1a1a", 
                  fontWeight: "bold",
                  marginBottom: "2rem"
                }}
              >
                NUESTRA PROPUESTA DE VALOR
              </Title>
              <Paragraph style={{ 
                fontSize: "18px", 
                lineHeight: "1.8em", 
                color: "#1a1a1a",
                marginBottom: "1.5rem"
              }}>
                Somos una empresa constructora con años de experiencia en el sector, 
                especializados en proyectos residenciales, industriales y comerciales 
                con el más alto estándar de calidad y compromiso ético.
              </Paragraph>
              <Paragraph style={{ 
                fontSize: "18px", 
                lineHeight: "1.8em", 
                color: "#1a1a1a",
                marginBottom: "2.5rem"
              }}>
                Desde nuestros inicios hemos ejecutado proyectos con eficiencia y rapidez 
                sin comprometer la calidad, lo que nos ha permitido establecer relaciones 
                sólidas con clientes e instituciones que confían en nuestro trabajo.
              </Paragraph>
              <div>
                <Button
                  type="primary"
                  size="large"
                  onClick={handleConocerMas}
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    background: "#0cb7f2",
                    borderColor: "#0cb7f2",
                    padding: "0 2rem",
                    height: "45px",
                    fontSize: "16px"
                  }}
                >
                  CONOCER MÁS
                </Button>
              </div>
            </Col>

            <Col xs={24} md={12} style={{ display: "flex", justifyContent: "center" }}>
              {/* <img
                src={propuestaImg}
                alt="Propuesta de valor"
                style={{ 
                  width: "100%", 
                  maxWidth: "500px",
                  borderRadius: "8px" 
                }}
              /> */}
              <div style={{
                width: "100%",
                height: "300px",
                background: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px"
              }}>
                <span style={{ color: "#999" }}>Imagen de propuesta</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Sección Nuestros Servicios */}
      <div style={{ 
        padding: "4rem 2rem", 
        background: "#f8f9fa"
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto",
          textAlign: "center"
        }}>
          <Title 
            level={2} 
            style={{ 
              color: "#1a1a1a", 
              fontWeight: "bold",
              marginBottom: "3rem"
            }}
          >
            NUESTROS SERVICIOS
          </Title>
          
          <Row gutter={[24, 24]} justify="center">
            {servicios.map((servicio, index) => (
              <Col xs={12} sm={8} md={6} key={index}>
                <Card
                  onClick={handleServicioClick} // Todos los servicios redirigen a /residencial
                  style={{
                    textAlign: "center",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    border: "none",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffffff",
                    transition: "all 0.3s ease",
                    cursor: "pointer" // Muestra que es clickeable
                  }}
                  bodyStyle={{
                    padding: "20px",
                    width: "100%"
                  }}
                  hoverable
                >
                  <div style={{ 
                    fontSize: "16px", 
                    fontWeight: "600",
                    color: "#1a1a1a"
                  }}>
                    {servicio}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
