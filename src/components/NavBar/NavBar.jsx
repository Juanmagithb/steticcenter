import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { AiOutlineShopping } from "react-icons/ai";

const NavBar = () => {
    
    return(
        <div className='navbar1'>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='navbar1'>Stetic Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navbar1 me-auto">
            <Nav.Link href="#home">Inicio </Nav.Link>
            <Nav.Link href="#link">Compras(1) <AiOutlineShopping/></Nav.Link>
            <Nav.Link href="#link">Turnos </Nav.Link>
            <NavDropdown title="Tratamientos" className='navbar1' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Estetica Facial </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Estetica Corporal </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Odontologia </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Consultas </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )

}





export default NavBar;