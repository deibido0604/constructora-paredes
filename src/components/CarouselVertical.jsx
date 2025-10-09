import { useEffect, useState } from 'react';

const CarouselVertical = ({ 
  images = [], 
  autoPlayInterval = 4000,
  height = "500px"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const getVisibleImages = () => {
    if (images.length === 0) return [];
    
    if (isMobile) {
      return [images[currentIndex]];
    } else {
      const imagesToShow = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % images.length;
        imagesToShow.push(images[index]);
      }
      return imagesToShow;
    }
  };

  if (images.length === 0) {
    return <div>No hay imágenes para mostrar</div>;
  }

  const visibleImages = getVisibleImages();

  return (
    <div style={{
      width: "100%",
      minHeight: isMobile ? "400px" : height,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: isMobile ? "1rem 0" : "2rem 0",
      position: "relative"
    }}>
      <div style={{
        display: "flex",
        gap: isMobile ? "0" : "10px",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1200px",
        padding: "0 20px",
        flexWrap: "wrap"
      }}>
        {visibleImages.map((image, index) => (
          <div
            key={index}
            style={{
              flex: isMobile ? "1 1 100%" : "1 1 300px",
              maxWidth: isMobile ? "100%" : "400px",
              height: isMobile ? "350px" : height,
              overflow: "hidden",
              position: "relative",
              transition: "all 0.5s ease",
              opacity: isMobile ? 1 : (index === 1 ? 1 : 0.8),
              transform: isMobile ? "scale(1)" : (index === 1 ? "scale(1.05)" : "scale(0.95)"),
              minWidth: isMobile ? "100%" : "280px",
              margin: isMobile ? "5px 0" : "10px 0"
            }}
          >
            <img
              src={image.src}
              alt={image.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                padding: isMobile ? "1rem 0.5rem 0.5rem" : "1.5rem 1rem 1rem",
                color: "white",
                textAlign: "center"
              }}
            >
              <h3 style={{ 
                color: "white", 
                margin: 0,
                fontSize: isMobile ? "1.1rem" : "1.3rem",
                fontWeight: "bold"
              }}>
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Botones de navegación - Ocultos en móviles si hay pocas imágenes */}
      {images.length > 1 && !isMobile && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => 
              prev === 0 ? images.length - 1 : prev - 1
            )}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.8)",
              border: "none",
              color: "#333",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => 
              (prev + 1) % images.length
            )}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.8)",
              border: "none",
              color: "#333",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ›
          </button>
        </>
      )}

      {/* Botones de navegación para móviles - más pequeños */}
      {images.length > 1 && isMobile && (
        <>
          <button
            onClick={() => setCurrentIndex((prev) => 
              prev === 0 ? images.length - 1 : prev - 1
            )}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.9)",
              border: "none",
              color: "#333",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "16px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => 
              (prev + 1) % images.length
            )}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.9)",
              border: "none",
              color: "#333",
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "16px",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default CarouselVertical;