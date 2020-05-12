
import React, { useState } from 'react';
import "../styles/header.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return(
  
  <>
     <div>
      <Navbar color="light" fixed="top" light expand="md">
        <NavbarBrand href="/">Stewart MacDonald</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/projects/">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/workexperience/">Work Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarText>
           604-798-5441 | stewart.d.macdonald@gmail.com
          </NavbarText>
      </Navbar>
    </div>
    
  </>
);
  }

export default Header
