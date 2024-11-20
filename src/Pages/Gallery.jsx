import { Container, Row, Col } from "react-bootstrap";
import "../style/Gallery.css";
import NavbarCustom from "../components/navbar";

function Gallery() {
  const images = [
    { url: "/gallery1.jpg", caption: "La magia del nostro bar" },
    { url: "/gallery2.jpg", caption: "Cocktail esclusivi" },
    { url: "/gallery3.jpg", caption: "Musica e divertimento" },
    { url: "/gallery5.jpeg", caption: "Festeggia con noi" },
    { url: "/gallery4.jpg", caption: "Momenti da ricordare" },
    { url: "/gallery6.jpg", caption: "La nostra atmosfera" },
  ];

  return (
    <div className="body-gallery">
      <div className="overlay-gallery"></div>
      <NavbarCustom />
      <Container fluid className="gallery-container py-5">
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
                <img
                  src={image.url}
                  alt={image.caption}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <p className="gallery-caption">{image.caption}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
