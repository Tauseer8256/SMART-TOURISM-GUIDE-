import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail,MdCall,MdWhatsapp } from "react-icons/md";
import LogoImage from'../assets/images/site-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const router = useRouter();
  const closeMenu = () => {
    if (isOpen) {
      toggle();
    }
  };

  return (
    <>
      <section id="topbar" className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center"><MdEmail /><a href="mailto:smarttourismguide@gmail.com"> smarttourismguide@gmail.com</a></i>
            <i className="bi bi-phone d-flex align-items-center ms-4"><MdCall /><span> +971521661480</span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter"><FaTwitter /></a>
            <a href="#" className="facebook"><FaFacebook /></a>
            <a href="#" className="instagram"><FaInstagram /></a>
            <a href="#" className="linkedin"><FaLinkedin /></a>
          </div>
        </div>
      </section>

      <section id="header">
        <Navbar expand="lg" className="navigation-bar sticky p-0">
          <Container>
            <Navbar.Brand className="pt-0">
              <img src={LogoImage} alt="Site Logo" className="img-fluid header-logo d-none d-md-block" />
              <img src={LogoImage} alt="Site Logo" className="img-fluid  header-logo d-md-none" />
            </Navbar.Brand>
            <div className="toggle-block" onClick={toggle}>
              <div className={`cta ${isOpen ? 'active' : ''}`}>
                <div className={`toggle-btn type1 ${isOpen ? 'active' : ''}`}></div>
              </div>
            </div>
            <Navbar.Collapse
              className={`justify-content-center ${isOpen ? 'show' : ''}`}
              id="navbarNav"
            >
              <ul className="navbar-nav navbar-right navmanu">
                <li className="nav-item" onClick={closeMenu}>
                  <Link className={'active nav-link'} to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" onClick={closeMenu}>
                  <Link
                    className={'nav-link'}
                    to="/"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item" onClick={closeMenu}>
                  <Link
                    className={ 'nav-link'}
                    to="/"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item" onClick={closeMenu}>
                  <Link
                    className={ 'nav-link'}
                    to="/"
                  >
                    AI Assistance
                  </Link>
                </li>
                {/* <li className="nav-item" onClick={closeMenu}>
                  <Link
                    className={router.pathname == '/services' ? 'active nav-link' : 'nav-link'}
                    to="/services"
                  >
                    Services
                  </Link>
                </li> */}
                {/* <li className="nav-item" onClick={closeMenu}>
                  <Link
                    className={router.pathname == '/projects' ? 'active nav-link' : 'nav-link'}
                    to="/projects"
                    >
                    Projects
                  </Link>
                </li> */}
                {/* <li className="nav-item" onClick={closeMenu}>
                  <Link 
                  className={ 'nav-link'}
                  to="/"
                  >
                    Our Team
                  </Link>
                </li> */}
                <li className="nav-item" onClick={closeMenu}>
                  <Link
                    className={ 'nav-link'}
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
