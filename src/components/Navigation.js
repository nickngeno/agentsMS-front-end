import React from "react";
import { Container, Navbar, Nav , } from "react-bootstrap";
import  {NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <Container className="p-0" >
      <Navbar bg="light" >
        <Nav>
          <NavLink className="navlink" to="/" >Home </NavLink>
          <NavLink className="navlink"  to="/agent" >Agent</NavLink>
          <NavLink className="navlink " to="/department" >Department</NavLink>
        </Nav>
      </Navbar>
    </Container>  
  );
};

export default Navigation;
