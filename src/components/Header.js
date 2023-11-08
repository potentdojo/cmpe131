import React, { useState } from 'react'
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


function Header() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div> // can give it a className to style in our App.css file
    <Navbar color="info" light> // can change the color by using inline styling
      <NavbarBrand href="/" > // this will link us back to our landing/home page
        Website Name
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="me-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem> // duplicate everything in this tag to make other links
            <NavLink to="/"> Home </NavLink> // links to home/landing page
          </NavItem>
          <NavItem>
            <NavLink to="/faq"> // links to FAQ page
              FAQ
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  )
}

export default Header