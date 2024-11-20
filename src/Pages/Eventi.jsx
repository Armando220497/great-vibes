import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../style/Eventi.css";
import NavbarCustom from "../components/navbar";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/eventi.json") // Percorso del file JSON
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) =>
        console.error("Errore nel caricamento degli eventi:", error)
      );
  }, []);

  return (
    <div className="body-events">
      <NavbarCustom />
      <Container fluid className="events-page px-5">
        <section className="featured-events py-5">
          <h2 className="text-center eventi-title mb-5">
            Eventi del Great Vibes
          </h2>
          <Row className="justify-content-center g-4">
            {events.map((event) => (
              <Col md={3} sm={6} key={event.id}>
                <Card className="h-100">
                  <Card.Img variant="top" src={event.image} alt={event.title} />
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Subtitle className="mb-2">{event.date}</Card.Subtitle>
                    <Card.Text>{event.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Events;
