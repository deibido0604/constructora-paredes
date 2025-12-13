import { Row, Col, Typography, Divider, Carousel } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import propuestaImg from "../assets/img/Propuesta.jpg";
import piscinas from "../assets/img/Piscinas.jpg";
import fontaneria from "../assets/img/Fontaneria.jpg";
import jardineria from "../assets/img/Jardineria.jpg";
import electricidad from "../assets/img/Electricidad.jpg";
import interiores from "../assets/img/Interiores.jpg";
import remodelacion from "../assets/img/Remodelacion.jpg";
import refrigeracion from "../assets/img/Refrigeracion.jpg";
import ceramica from "../assets/img/Ceramica.jpg";
import propuestaImg_2 from "../assets/img/Propuesta_2.jpg";
import piscinas_2 from "../assets/img/Piscinas_2.jpg";
import interiores_2 from "../assets/img/Interiores_2.jpg";
import electricidad_2 from "../assets/img/Electricidad_2.jpg";
import remodelacion_2 from "../assets/img/Interiores_Luces_1.jpg";
import refrigeracion_2 from "../assets/img/Refrigeracion_2.jpg";
import ceramica_2 from "../assets/img/Ceramica_2.jpg";

const { Title, Paragraph } = Typography;

const Residencial = () => {
    const location = useLocation();

    const serviciosResidenciales = [
        {
            id: "casas",
            titulo: "CONSTRUCCIÓN DE CASAS",
            descripcion: "Diseñamos y construimos tu casa soñada desde los cimientos hasta el último detalle. Utilizamos materiales de primera calidad y técnicas constructivas modernas para garantizar durabilidad y confort en cada espacio de tu hogar.",
            detalles: [
                "Planos arquitectónicos personalizados",
                "Estudio de suelos y terrenos",
                "Construcción desde cero",
                "Supervisión técnica constante",
                "Materiales de primera calidad",
                "Cumplimiento de normativas"
            ],
            imagenes: [propuestaImg, propuestaImg_2]
        },
        {
            id: "piscinas",
            titulo: "PISCINAS",
            descripcion: "Diseñamos y construimos piscinas modernas, funcionales y seguras que se adaptan perfectamente a tu espacio exterior. Creamos ambientes acuáticos que se convierten en el centro de reunión familiar.",
            detalles: [
                "Diseños personalizados",
                "Sistemas de filtrado eficientes",
                "Iluminación LED subacuática",
                "Bordes infinitos y cascadas",
                "Materiales antideslizantes",
                "Sistemas de mantenimiento"
            ],
            imagenes: [piscinas, piscinas_2]
        },
        {
            id: "fontaneria",
            titulo: "FONTANERÍA",
            descripcion: "Soluciones integrales en sistemas hidráulicos residenciales. Instalaciones eficientes, libres de fugas y con los más altos estándares de calidad para garantizar el perfecto funcionamiento del agua en tu hogar.",
            detalles: [
                "Instalación de tuberías PVC y cobre",
                "Sistemas de presión optimizados",
                "Calentadores solares y eléctricos",
                "Drenajes pluviales y sanitarios",
                "Mantenimiento preventivo",
                "Reparaciones urgentes 24/7"
            ],
            imagenes: [fontaneria]
        },
        {
            id: "jardineria",
            titulo: "JARDINERÍA Y PAISAJISMO",
            descripcion: "Transformamos tus espacios exteriores en oasis verdes. Diseñamos jardines que armonizan con tu construcción, creando ambientes naturales que embellecen y aumentan el valor de tu propiedad.",
            detalles: [
                "Diseño paisajístico personalizado",
                "Sistemas de riego automatizado",
                "Iluminación exterior decorativa",
                "Selección de plantas nativas",
                "Césped natural y artificial",
                "Mantenimiento integral"
            ],
            imagenes: [jardineria]
        },
        {
            id: "electricidad",
            titulo: "ELECTRICIDAD RESIDENCIAL",
            descripcion: "Instalaciones eléctricas seguras, eficientes y modernas para tu hogar. Implementamos sistemas que cumplen con todas las normativas de seguridad y se adaptan a las necesidades tecnológicas actuales.",
            detalles: [
                "Cableado estructurado completo",
                "Paneles solares residenciales",
                "Sistemas de puesta a tierra",
                "Automatización del hogar",
                "Instalaciones seguras certificadas",
                "Soluciones energéticas eficientes"
            ],
            imagenes: [electricidad, electricidad_2]
        },
        {
            id: "interiores",
            titulo: "DISEÑO DE INTERIORES",
            descripcion: "Transformamos tus espacios interiores con diseños funcionales, estéticos y personalizados. Creamos ambientes que reflejan tu personalidad mientras optimizamos cada centímetro de tu hogar.",
            detalles: [
                "Asesoría en diseño y decoración",
                "Selección de mobiliario y acabados",
                "Combinación de colores y texturas",
                "Optimización de espacios pequeños",
                "Iluminación interior estratégica",
                "Ambientes armónicos y funcionales"
            ],
            imagenes: [interiores, interiores_2]
        },
        {
            id: "remodelacion",
            titulo: "REMODELACIONES INTEGRALES",
            descripcion: "Renovamos y transformamos tus espacios existentes para darles nueva vida, funcionalidad y modernidad. Mantenemos la esencia de tu hogar mientras incorporamos las últimas tendencias en diseño y construcción.",
            detalles: [
                "Renovación completa de baños y cocinas",
                "Ampliación y redistribución de espacios",
                "Cambio de pisos y revestimientos",
                "Actualización de sistemas eléctricos",
                "Mejora de aislamiento térmico y acústico",
                "Modernización de fachadas"
            ],
            imagenes: [remodelacion, remodelacion_2]
        },
        {
            id: "refrigeracion",
            titulo: "REFRIGERACIÓN Y CLIMATIZACIÓN",
            descripcion: "Instalación y mantenimiento de sistemas de refrigeración y aire acondicionado para garantizar el confort térmico en tu hogar durante todo el año. Ofrecemos soluciones eficientes y de bajo consumo energético.",
            detalles: [
                "Instalación de aire acondicionado split",
                "Sistemas centralizados de climatización",
                "Refrigeradores y cámaras frigoríficas",
                "Mantenimiento preventivo y correctivo",
                "Limpieza y desinfección de equipos",
                "Optimización del consumo energético"
            ],
            imagenes: [refrigeracion, refrigeracion_2]
        },
        {
            id: "ceramica",
            titulo: "INSTALACIÓN DE CERÁMICA Y PORCELANATO",
            descripcion: "Trabajos de alta precisión en la instalación de cerámica, porcelanato y piedras naturales. Creamos acabados perfectos que realzan la belleza de tus pisos y paredes con durabilidad garantizada.",
            detalles: [
                "Instalación de cerámica y porcelanato",
                "Trabajos en piedra natural y mármol",
                "Diseños personalizados y mosaicos",
                "Cortes precisos y ajustes perfectos",
                "Juntas uniformes y limpias",
                "Impermeabilización de áreas húmedas"
            ],
            imagenes: [ceramica, ceramica_2]
        },
        {
            id: "pintura",
            titulo: "PINTURA Y ACABADOS",
            descripcion: "Aplicamos técnicas profesionales de pintura y acabados que realzan la belleza arquitectónica de tu hogar. Utilizamos productos de alta calidad que protegen y duran por más tiempo.",
            detalles: [
                "Pintura interior y exterior",
                "Texturizados y efectos especiales",
                "Acabados en madera y metal",
                "Preparación profesional de superficies",
                "Materiales de alta durabilidad",
                "Limpieza y protección post-obra"
            ],
            imagenes: [propuestaImg, propuestaImg_2]
        },
        {
            id: "mas",
            titulo: "MÁS SERVICIOS ESPECIALIZADOS",
            descripcion: "Además de nuestros servicios principales, ofrecemos una amplia gama de soluciones especializadas para cubrir todas las necesidades de tu proyecto residencial. Consulta por servicios adicionales personalizados.",
            detalles: [
                "Instalación de puertas y ventanas",
                "Trabajos en yeso y drywall",
                "Impermeabilización de techos y terrazas",
                "Instalación de closets y mobiliario empotrado",
                "Sistemas de seguridad y domótica",
                "Asesoría técnica y permisos municipales"
            ],
            imagenes: [propuestaImg_2, propuestaImg]
        }
    ];

    useEffect(() => {
        const scrollToElement = () => {
            if (location.hash) {
                const elementId = location.hash.replace('#', '');
                const element = document.getElementById(elementId);
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 100;
                    setTimeout(() => {
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }, 300);
                }
            }
        };
        scrollToElement();
        window.addEventListener('hashchange', scrollToElement);
        return () => window.removeEventListener('hashchange', scrollToElement);
    }, [location.hash]);

    return (
        <div style={{ padding: "2rem 1rem", background: "#fff", minHeight: "100vh" }}>
            <div style={{ textAlign: "center", marginBottom: "5rem", paddingTop: "2rem" }}>
                <Title level={1} style={{ color: "#0cb7f2", marginBottom: "1.5rem" }}>
                    SERVICIOS RESIDENCIALES
                </Title>
                <Paragraph style={{ 
                    fontSize: "18px", 
                    color: "#666", 
                    maxWidth: "800px", 
                    margin: "0 auto",
                    textAlign: "justify",
                    textJustify: "inter-word"
                }}>
                    Soluciones integrales para hacer de tu hogar el espacio perfecto. Calidad, experiencia y compromiso en cada proyecto.
                </Paragraph>
            </div>

            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {serviciosResidenciales.map((servicio, index) => (
                    <div
                        key={servicio.id}
                        id={servicio.id}
                        style={{ marginBottom: "5rem", paddingTop: "2rem", scrollMarginTop: "100px" }}
                    >
                        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                            <Title level={2} style={{ color: "#0cb7f2", fontSize: "28px" }}>
                                {servicio.titulo}
                            </Title>
                        </div>

                        <Row gutter={[48, 32]} align="middle" style={{ marginBottom: "3rem" }}>
                            <Col
                                xs={{ span: 24, order: 2 }}
                                md={{ span: 12, order: index % 2 === 0 ? 1 : 2 }}
                            >
                                <Carousel 
                                    autoplay 
                                    autoplaySpeed={10000}
                                    dotPosition="bottom"
                                    style={{
                                        width: "100%",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
                                    }}
                                >
                                    {servicio.imagenes.map((imagen, imgIndex) => (
                                        <div key={imgIndex}>
                                            <img
                                                src={imagen}
                                                alt={`${servicio.titulo} ${imgIndex + 1}`}
                                                style={{
                                                    width: "100%",
                                                    height: "400px",
                                                    objectFit: "cover",
                                                    borderRadius: "12px"
                                                }}
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </Col>
                            <Col
                                xs={{ span: 24, order: 3 }}
                                md={{ span: 12, order: index % 2 === 0 ? 2 : 1 }}
                            >
                                <Paragraph style={{ 
                                    color: "#1a1a1a", 
                                    marginBottom: "2rem", 
                                    fontSize: "16px", 
                                    lineHeight: "1.8",
                                    textAlign: "justify",
                                    textJustify: "inter-word"
                                }}>
                                    {servicio.descripcion}
                                </Paragraph>

                                <Divider style={{ borderColor: "#0cb7f2", margin: "2rem 0" }} />

                                <div>
                                    <Title level={4} style={{ color: "#1a1a1a", marginBottom: "1.5rem" }}>
                                        Lo que incluye este servicio:
                                    </Title>
                                    <Row gutter={[16, 12]}>
                                        {servicio.detalles.map((detalle, idx) => (
                                            <Col xs={24} key={idx}>
                                                <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}>
                                                    <span style={{ color: "#0cb7f2", marginRight: "12px", fontWeight: "bold", fontSize: "16px", marginTop: "2px" }}>•</span>
                                                    <span style={{ color: "#1a1a1a", fontSize: "15px", lineHeight: "1.5" }}>{detalle}</span>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        {index < serviciosResidenciales.length - 1 && (
                            <Divider style={{ borderColor: "#e8e8e8", margin: "3rem 0" }} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Residencial;