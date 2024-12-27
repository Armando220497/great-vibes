import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarCustom from "../components/navbar";
import Orari from "../components/orari.jsx";
import "../style/Gallery.css";

function Gallery() {
  const images = [
    {
      url: "/gallery1.webp",
      caption: "La magia del nostro bar",
      description: "Scopri il nostro ambiente elegante e confortevole.",
    },
    {
      url: "/gallery2.webp",
      caption: "Cocktail esclusivi",
      description:
        "Assaggia i cocktail esclusivi preparati dai nostri bartender.",
    },
    {
      url: "/gallery3.webp",
      caption: "Musica e divertimento",
      description: "Vivi la notte con musica live e tanto divertimento.",
    },
    {
      url: "/gallery5.webp",
      caption: "Festeggia con noi",
      description:
        "Organizza le tue feste nel nostro locale, garantendo momenti indimenticabili.",
    },
    {
      url: "/gallery4.webp",
      caption: "Momenti da ricordare",
      description: "Cattura i momenti più belli della tua serata da noi.",
    },
    {
      url: "/gallery6.webp",
      caption: "La nostra atmosfera",
      description:
        "Atmosfera rilassante e accogliente, perfetta per qualsiasi occasione.",
    },
  ];

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarToggle = (isExpanded) => {
    setIsNavbarExpanded(isExpanded);
  };

  return (
    <>
      <Orari />
      <div
        className={`body-gallery ${isNavbarExpanded ? "navbar-expanded" : ""}`}
      >
        <div className="overlay-gallery"></div>
        <NavbarCustom onToggle={handleNavbarToggle} />
        <Container fluid className="gallery-container ">
          <h1 className="text-center gallery-title mb-5">
            Scopri il nostro locale
          </h1>
          <Row className="g-4">
            {images.map((image, index) => (
              <Col
                lg={4}
                md={6}
                sm={12}
                key={index}
                className="d-flex justify-content-center"
              >
                <div className="gallery-card">
                  <div className="gallery-inner">
                    {/* Frontale della card */}
                    <div className="gallery-front">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="gallery-image"
                      />
                    </div>
                    {/* Retro della card */}
                    <div className="gallery-back">
                      <p className="gallery-caption">{image.caption}</p>
                      <p className="gallery-description">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Gallery;
