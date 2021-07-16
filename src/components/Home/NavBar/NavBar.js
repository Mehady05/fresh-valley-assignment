import React from "react";
import { useContext } from "react";
import {Button, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";

const NavBar = () => {
  const history = useHistory()
  const goLogin= ()=>{
    history.push('/login')
  }

  const handleLogOut = ()=>{
    setLogin({})
  }
  const[login, setLogin] = useContext(UserContext)
  return (
    <Navbar expand="lg" bg="light">
        <Navbar.Brand href="#home">BD_BAZAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
            </Nav>
            <Form inline>
            { login.email ?
              <Button onClick={handleLogOut} variant="outline-success">Login Out</Button>:
              <Button onClick={goLogin} variant="outline-success">Login</Button>
              }
            </Form>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
