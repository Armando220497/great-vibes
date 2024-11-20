import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types"; // Importa PropTypes
import "../style/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarCustom({ onToggle = () => {} }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
    onToggle(!expanded); // Chiama la funzione fornita dal componente padre
  };

  return (
    <>
      <Navbar
        className="navbar"
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        expanded={expanded}
        style={{ zIndex: 1000 }} // Aggiungi un alto z-index per assicurare che sia sopra il contenuto
      >
        <Container>
          {/* Bottone di toggle per la visualizzazione su schermi piccoli con icona personalizzata */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          >
            <FontAwesomeIcon className="toggle-icon" icon={faBars} />
          </Navbar.Toggle>

          {/* Contenuto della navbar che verrà collassato */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="me-auto custom-navbar-link">
              <Nav.Link className="custom-navbar-link" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="custom-navbar-link" as={Link} to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link className="custom-navbar-link" as={Link} to="/eventi">
                Eventi
              </Nav.Link>
              <Nav.Link className="custom-navbar-link" as={Link} to="/gallery">
                Gallery
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Orari apertura posizionati a destra */}
          <div className="orari ms-auto">
            <p>Orari apertura: Lun-Dom 10:00 - 23:00</p>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

NavbarCustom.propTypes = {
  onToggle: PropTypes.func,
};

export default NavbarCustom;
