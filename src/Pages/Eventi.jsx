import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavbarCustom from "../components/navbar";

import "../style/Eventi.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    fetch("/eventi.json") // Percorso del file JSON
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) =>
        console.error("Errore nel caricamento degli eventi:", error)
      );
  }, []);

  const handleNavbarToggle = (isExpanded) => {
    if (isExpanded) {
      setNavbarHeight(150); // Altezza quando la navbar è espansa
    } else {
      setNavbarHeight(0); // Rimuove il margine quando la navbar è chiusa
    }
  };

  return (
    <>
      <div className="body-events">
        <NavbarCustom onToggle={handleNavbarToggle} />
        <Container
          fluid
          className="events-page "
          style={{ paddingTop: `${navbarHeight}px` }}
        >
          <section className="featured-events py-5">
            <h2 className="text-center eventi-title mb-5">
              Eventi del Great Vibes
            </h2>
            <Row className="justify-content-center g-4">
              {events.map((event) => (
                <Col md={3} sm={6} key={event.id}>
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={event.image}
                      alt={event.title}
                    />
                    <Card.Body>
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Subtitle className="mb-2">
                        {event.date}
                      </Card.Subtitle>
                      <Card.Text>{event.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
}

export default Events;
