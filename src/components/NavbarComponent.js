import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/EMOTIONALcup.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Emotional Detection
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/upload-image">Subir Imagenes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
