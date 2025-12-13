import { useState } from "react";
import { Row, Col, Typography, Button, Form, Input, Select, message, Card } from "antd";
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import propuestaImg from "../assets/img/Propuesta.jpg";
import piscinas from "../assets/img/Piscinas.jpg";
import fontaneria from "../assets/img/Fontaneria.jpg";
import interiores from "../assets/img/Interiores.jpg";
import jardineria from "../assets/img/Jardineria.jpg";
import electricidad from "../assets/img/Electricidad.jpg";
import remodelacion from "../assets/img/Remodelacion.jpg";
import CarouselVertical from "../components/CarouselVertical";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contactanos = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const carouselImages = [
        { src: propuestaImg, title: "Construcción Residencial" },
        { src: piscinas, title: "Piscinas" },
        { src: fontaneria, title: "Fontanería" },
        { src: interiores, title: "Diseño de Interiores" },
        { src: jardineria, title: "Jardinería" },
        { src: electricidad, title: "Electricidad" },
        { src: remodelacion, title: "Remodelación" }
    ];

    const servicios = [
        "Casas",
        "Piscinas",
        "Fontanería",
        "Jardinería",
        "Electricidad",
        "Diseño de interiores",
        "Remodelación",
        "Refrigeracion",
        "Ceramica".
        "Pintura",
        "Más"
    ];

    const opcionesServicios = servicios.map(s => ({ value: s, label: s }));

    const showSuccessMessage = () => {
        message.success({
            content: '¡Mensaje enviado con éxito! Te contactaremos pronto.',
            duration: 5,
            style: {
                fontSize: '16px',
                fontWeight: '500',
                marginTop: '50px'
            }
        });
    };

    const showErrorMessage = (text = 'Error al enviar el formulario. Por favor intenta nuevamente.') => {
        message.error({
            content: text,
            duration: 5,
            style: {
                fontSize: '16px',
                fontWeight: '500',
                marginTop: '50px'
            }
        });
    };

    const onFinish = async (values) => {
        setLoading(true);

        try {
            const response = await fetch('https://formspree.io/f/mvgelkbg', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Nombre: values.nombre,
                    Apellido: values.apellido,
                    Email: values.email,
                    Telefono: values.telefono,
                    Servicio: values.servicio,
                    Mensaje: values.mensaje,
                    _subject: `Contacto - ${values.servicio} - ${values.nombre} ${values.apellido}`
                }),
            });

            if (response.ok) {
                showSuccessMessage();
                form.resetFields();
            } else {
                showErrorMessage();
            }
        } catch (error) {
            showErrorMessage();
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        showErrorMessage('Por favor completa todos los campos requeridos.');
    };

    return (
        <div>
            {/* HERO IGUAL QUE EN HOME PERO MÁS CORTO */}
            <CarouselVertical
                images={carouselImages}
                autoPlayInterval={3500}
                height="380px"
            />

            {/* INFORMACIÓN DE CONTACTO */}
            <div style={{
                padding: "4rem 2rem",
                background: "#fff",
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{ maxWidth: "1200px", width: "100%" }}>
                    <Title
                        level={2}
                        style={{
                            color: "#1a1a1a",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            textAlign: "center"
                        }}
                    >
                        CONTÁCTANOS
                    </Title>

                    <Paragraph
                        style={{
                            textAlign: "center",
                            color: "#666",
                            maxWidth: "700px",
                            margin: "0 auto 3rem",
                            fontSize: "17px"
                        }}
                    >
                        Estamos listos para ayudarte con tu proyecto. Escríbenos y te responderemos lo antes posible.
                    </Paragraph>

                    <Row gutter={[48, 32]} justify="center">

                        {/* INFORMACIÓN DIRECTA */}
                        <Col xs={24} md={10}>
                            <Card
                                style={{
                                    borderRadius: "10px",
                                    padding: "1.5rem",
                                    border: "none",
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
                                }}
                            >
                                <Title level={4} style={{ color: "#0cb7f2", marginBottom: "1.5rem" }}>
                                    Información de contacto
                                </Title>

                                <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
                                    <EnvironmentOutlined style={{ fontSize: "22px", color: "#0cb7f2", marginRight: "14px" }} />
                                    <span>San Pedro Sula, Honduras</span>
                                </div>

                                <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
                                    <PhoneOutlined style={{ fontSize: "22px", color: "#0cb7f2", marginRight: "14px" }} />
                                    <span>+504 9591-3714</span>
                                </div>

                                <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center" }}>
                                    <MailOutlined style={{ fontSize: "22px", color: "#0cb7f2", marginRight: "14px" }} />
                                    <span>paredesconstrucciones61@gmail.com</span>
                                </div>

                                <Button
                                    type="primary"
                                    href="https://wa.me/50495913714"
                                    size="large"
                                    style={{
                                        background: "#25D366",
                                        borderColor: "#25D366",
                                        width: "100%",
                                        fontWeight: "bold",
                                        height: "45px"
                                    }}
                                >
                                    WhatsApp Directo
                                </Button>
                            </Card>
                        </Col>

                        {/* FORMULARIO */}
                        <Col xs={24} md={14}>
                            <Card
                                style={{
                                    borderRadius: "10px",
                                    padding: "2rem",
                                    border: "none",
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
                                }}
                            >
                                <Form
                                    form={form}
                                    layout="vertical"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    style={{ maxWidth: "600px", margin: "0 auto" }}
                                >
                                    <Row gutter={16}>
                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                label="Nombre"
                                                name="nombre"
                                                rules={[{ required: true, message: 'Ingrese su nombre' }]}
                                            >
                                                <Input size="large" placeholder="Tu nombre" />
                                            </Form.Item>
                                        </Col>

                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                label="Apellido"
                                                name="apellido"
                                                rules={[{ required: true, message: 'Ingrese su apellido' }]}
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
                                                rules={[{ type: 'email', required: true, message: 'Email inválido' }]}
                                            >
                                                <Input size="large" placeholder="tu@email.com" />
                                            </Form.Item>
                                        </Col>

                                        <Col xs={24} sm={12}>
                                            <Form.Item
                                                label="Teléfono"
                                                name="telefono"
                                                rules={[{ required: true, message: 'Ingrese su teléfono' }]}
                                            >
                                                <Input size="large" placeholder="8847-0000" />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item
                                        label="Servicio de interés"
                                        name="servicio"
                                        rules={[{ required: true, message: 'Seleccione un servicio' }]}
                                    >
                                        <Select
                                            size="large"
                                            placeholder="Selecciona el servicio"
                                            options={opcionesServicios}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        label="Mensaje"
                                        name="mensaje"
                                        rules={[{ required: true, message: 'Describe tu proyecto' }]}
                                    >
                                        <TextArea rows={4} placeholder="¿Qué necesitas?" />
                                    </Form.Item>

                                    <Form.Item style={{ textAlign: "center", marginBottom: 0 }}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            size="large"
                                            loading={loading}
                                            style={{
                                                background: "#0cb7f2",
                                                borderColor: "#0cb7f2",
                                                padding: "0 3rem",
                                                height: "45px",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                minWidth: "200px"
                                            }}
                                        >
                                            ENVIAR MENSAJE
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </div>
        </div>
    );
};


export default Contactanos;


