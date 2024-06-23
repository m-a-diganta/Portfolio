import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <div className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="logo" />
          <ul>
            <li>
              <RouterLink to="/" className="menu-item" style={{ textDecoration: 'none', color: '#caf0f8' }}>
                <ScrollLink to="hero" smooth={true} duration={300}>
                  Home
                </ScrollLink>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/" className="menu-item" style={{ textDecoration: 'none', color: '#caf0f8' }}>
                <ScrollLink to="about" smooth={true} duration={300}>
                  About
                </ScrollLink>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/" className="menu-item" style={{ textDecoration: 'none', color: '#caf0f8' }}>
                <ScrollLink to="resume" smooth={true} duration={300}>
                  Resume
                </ScrollLink>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/" className="menu-item" style={{ textDecoration: 'none', color: '#caf0f8' }}>
                <ScrollLink to="skills" smooth={true} duration={300}>
                  Skills
                </ScrollLink>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/" className="menu-item" style={{ textDecoration: 'none', color: '#caf0f8' }}>
                <ScrollLink to="projects" smooth={true} duration={300}>
                  Projects
                </ScrollLink>
              </RouterLink>
            </li>
            {/* <li>
              <RouterLink to="/" className="menu-item" style={{ textDecoration: 'none', color: '#caf0f8' }}>
                <ScrollLink to="contact" smooth={true} duration={300}>
                  Contact
                </ScrollLink>
              </RouterLink>
            </li> */}
            <button className="contact-btn" onClick={() => {}}>
            <RouterLink to="/"  style={{ textDecoration: 'none', color: '#18d26e' }}>
                <ScrollLink to="contact" smooth={true} duration={300}>
                  Let's Talk
                </ScrollLink>
              </RouterLink>
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>{openMenu ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
