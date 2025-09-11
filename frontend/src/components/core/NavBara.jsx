import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
//import "../styles/NavBar.css"; //no hizo nada

function NavBara() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#2271b3" }}>
      <Container fluid>
        <Navbar.Brand href="#">THE FIRELIGHT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Calendario</Nav.Link>
            <NavDropdown title="Mini Games" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Rompecabezas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Preguntado</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBara;
