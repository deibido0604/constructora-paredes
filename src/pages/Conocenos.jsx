import { Row, Col, Typography, Card } from "antd";
import propuestaImg from "../assets/img/Propuesta.jpg";
import propuestaImg_2 from "../assets/img/Propuesta_2.jpg";
import "./Conocenos.css";

const { Title, Paragraph } = Typography;

const Conocenos = () => {

    const imagenesEquipo = Object.values(
        import.meta.glob("../assets/img/*.{jpg,jpeg,png,svg}", { eager: true })
    ).map(img => img.default);

    return (
        <div style={{ background: "#fff" }}>

            {/* HERO */}
            <div
                style={{
                    height: "450px",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${propuestaImg_2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    padding: "0 2rem"
                }}
            >
                <div style={{ maxWidth: "900px" }}>
                    <Title style={{ color: "white", fontSize: "48px", fontWeight: "bold" }}>
                        CONÓCENOS
                    </Title>
                    <Paragraph style={{ color: "#f1f1f1", fontSize: "20px", lineHeight: "1.8em" }}>
                        Somos una empresa dedicada a la construcción con un enfoque en excelencia,
                        profesionalismo y calidad. Cada proyecto que realizamos está respaldado por
                        experiencia, compromiso y pasión por construir sueños que perduren.
                    </Paragraph>
                </div>
            </div>

            {/* NUESTRA HISTORIA */}
            <div style={{ padding: "4rem 2rem" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <Row gutter={[48, 32]} align="middle">
                        <Col xs={24} md={12}>
                            <img
                                src={propuestaImg}
                                alt="Nuestra historia"
                                style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                                }}
                            />
                        </Col>

                        <Col xs={24} md={12}>
                            <Title level={2} style={{ fontWeight: "bold", color: "#1a1a1a" }}>
                                NUESTRA HISTORIA
                            </Title>
                            <Paragraph style={{ fontSize: "18px", lineHeight: "1.8em", color: "#444" }}>
                                Iniciamos como un pequeño equipo con grandes sueños y una visión clara:
                                ofrecer servicios de construcción que no solo cumplieran, sino que superaran
                                las expectativas de nuestros clientes.
                            </Paragraph>

                            <Paragraph style={{ fontSize: "18px", lineHeight: "1.8em", color: "#444" }}>
                                Hoy, gracias a nuestro trabajo responsable, ética profesional y compromiso
                                con la calidad, nos hemos consolidado como una empresa confiable capaz de
                                ejecutar proyectos de alto nivel en el ámbito residencial, comercial e industrial.
                            </Paragraph>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* MISIÓN - VISIÓN */}
            <div style={{ padding: "4rem 2rem", background: "#f8f9fa" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <Row gutter={[32, 32]} justify="center">

                        <Col xs={24} md={12}>
                            <Card
                                style={{
                                    padding: "2rem",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                }}
                            >
                                <Title level={3}>Nuestra Misión</Title>
                                <Paragraph style={{ fontSize: "17px", lineHeight: "1.7em", color: "#555" }}>
                                    Brindar soluciones de construcción innovadoras, eficientes y seguras,
                                    cuidando cada detalle para garantizar la satisfacción total de nuestros clientes,
                                    mientras construimos espacios que mejoren la vida de las personas.
                                </Paragraph>
                            </Card>
                        </Col>

                        <Col xs={24} md={12}>
                            <Card
                                style={{
                                    padding: "2rem",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                }}
                            >
                                <Title level={3}>Nuestra Visión</Title>
                                <Paragraph style={{ fontSize: "17px", lineHeight: "1.7em", color: "#555" }}>
                                    Ser una empresa referente en el sector construcción, reconocida por su calidad,
                                    seriedad y excelencia, desarrollando proyectos que marquen la diferencia en la comunidad.
                                </Paragraph>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </div>

            {/* EQUIPO — CARRUSEL INFINITO */}
            <div style={{ padding: "4rem 2rem" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
                    <Title level={2} style={{ marginBottom: "2rem" }}>
                        EQUIPO ESPECIALIZADO
                    </Title>
                    <Paragraph style={{ fontSize: "17px", maxWidth: "800px", margin: "0 auto 3rem" }}>
                        Nos enfocamos en ofrecer soluciones prácticas, responsables y de calidad,
                        adaptadas a las necesidades de cada cliente. Trabajamos con personal con experiencia
                        y proveedores confiables para garantizar resultados duraderos.
                    </Paragraph>

                    <div className="carousel-wrapper">
                        <div className="carousel-track">
                            {[...imagenesEquipo, ...imagenesEquipo].map((imagen, i) => (
                                <div className="carousel-item" key={i}>
                                    <Card
                                        style={{
                                            height: "140px",
                                            borderRadius: "10px",
                                            backgroundImage: `url(${imagen})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Conocenos;
