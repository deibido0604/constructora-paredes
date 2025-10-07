import { Row, Col, Typography, Button, Card, Form, Input, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import propuestaImg from "../assets/img/Propuesta.jpg";
import piscinas from "../assets/img/Piscinas.jpg";
import fontaneria from "../assets/img/Fontaneria.jpg";
import interiores from "../assets/img/Interiores.jpg";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Home = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleConocerMas = () => {
    navigate("/conocenos");
  };

  const handleServicioClick = () => {
    navigate("/residencial");
  };

  const onFinish = async (values) => {
    try {
      const response = await fetch('https://formspree.io/f/mkgqzdyk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Nombre: values.nombre,
          Apellido: values.apellido,
          Email: values.email,
          Telefono: values.telefono,
          Servicio: values.servicio,
          Mensaje: values.mensaje,
          _subject: `Cotización - ${values.servicio} - ${values.nombre} ${values.apellido}`
        }),
      });

      if (response.ok) {
        message.success('¡Cotización enviada con éxito! Nos pondremos en contacto contigo pronto.');
        form.resetFields();
      } else {
        message.error('Error al enviar el formulario. Por favor intenta nuevamente.');
      }
    } catch (error) {
      message.error('Error al enviar el formulario. Por favor intenta nuevamente.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Por favor completa todos los campos requeridos.');
  };

  const servicios = [
    { nombre: "Casas" },
    { nombre: "Piscinas", imagen: piscinas },
    { nombre: "Fontanería", imagen: fontaneria },
    { nombre: "Jardinería" },
    { nombre: "Electricidad" },
    { nombre: "Diseño de interiores", imagen: interiores },
    { nombre: "Remodelación" },
    { nombre: "Pintura" },
    { nombre: "Mas" }
  ];

  const opcionesServicios = servicios.map(servicio => ({
    value: servicio.nombre,
    label: servicio.nombre
  }));

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
              <img
                src={propuestaImg}
                alt="Propuesta de valor"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "8px"
                }}
              />
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
                  onClick={handleServicioClick}
                  style={{
                    textAlign: "center",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    border: "none",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: servicio.imagen
                      ? `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${servicio.imagen})`
                      : "#ffffff",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  bodyStyle={{
                    padding: "20px",
                    width: "100%",
                    position: "relative",
                    zIndex: 2
                  }}
                  hoverable
                >
                  <div style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    position: "relative",
                    zIndex: 2
                  }}>
                    {servicio.nombre}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Sección: Cotización */}
      <div style={{
        padding: "4rem 2rem",
        background: "#fff"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <Title
            level={2}
            style={{
              color: "#1a1a1a",
              fontWeight: "bold",
              marginBottom: "1rem"
            }}
          >
            COTIZA NUESTROS SERVICIOS
          </Title>

          <Paragraph style={{
            fontSize: "16px",
            lineHeight: "1.6em",
            color: "#666",
            marginBottom: "3rem"
          }}>
            Completa el formulario y nos pondremos en contacto contigo a la brevedad
          </Paragraph>

          <Form
            form={form}
            name="cotizacion"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            style={{
              textAlign: "left",
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Nombre"
                  name="nombre"
                  rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                >
                  <Input size="large" placeholder="Tu nombre" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Apellido"
                  name="apellido"
                  rules={[{ required: true, message: 'Por favor ingresa tu apellido' }]}
                >
                  <Input size="large" placeholder="Tu apellido" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Por favor ingresa tu email' },
                    { type: 'email', message: 'Email no válido' }
                  ]}
                >
                  <Input size="large" placeholder="tu@email.com" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Teléfono"
                  name="telefono"
                  rules={[{ required: true, message: 'Por favor ingresa tu teléfono' }]}
                >
                  <Input size="large" placeholder="8847-0000" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Servicio de interés"
              name="servicio"
              rules={[{ required: true, message: 'Por favor selecciona un servicio' }]}
            >
              <Select
                size="large"
                placeholder="Selecciona el servicio que necesitas"
                options={opcionesServicios}
              />
            </Form.Item>

            <Form.Item
              label="Mensaje"
              name="mensaje"
              rules={[{ required: true, message: 'Por favor describe tu proyecto' }]}
            >
              <TextArea
                rows={4}
                placeholder="Describe tu proyecto, necesidades específicas, o cualquier información relevante..."
                style={{ resize: 'vertical' }}
              />
            </Form.Item>

            <Form.Item style={{ textAlign: "center", marginBottom: 0 }}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  background: "#0cb7f2",
                  borderColor: "#0cb7f2",
                  padding: "0 3rem",
                  height: "45px",
                  fontSize: "16px",
                  minWidth: "200px"
                }}
              >
                SOLICITAR COTIZACIÓN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;