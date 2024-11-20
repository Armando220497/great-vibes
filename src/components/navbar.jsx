import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/navbar.css";

function NavbarCustom() {
  return (
    <>
      <Navbar className="navbar">
        <Container className="d-flex justify-content-center">
          <Nav className="custom-navbar-link">
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
        </Container>
        <div style={{ color: "white" }} className="orari">
          <p> Orari apertura: Lun-Dom 10:00 - 23:00</p>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarCustom;
