
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
  NavbarText,
  Button
} from 'reactstrap';
import { AnchorLink } from "gatsby-plugin-anchor-links"
import {Link} from 'gatsby'
;
const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return(
  
  <>
     <div>
      <Navbar id="myNavBar" color="light" fixed="top" light expand="md">
        <NavbarBrand href="/">Stewart MacDonald</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link to="/#projects" ><NavLink >Projects</NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="/#workexp" ><NavLink >Work Experience</NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="/#about"><NavLink >About</NavLink></Link>
            </NavItem>
          </Nav>
          <NavbarText>
           604-798-5441 | stewart.d.macdonald@gmail.com
          </NavbarText>
        </Collapse>
        
      </Navbar>
    </div>
    
  </>
);
  }

export default Header
