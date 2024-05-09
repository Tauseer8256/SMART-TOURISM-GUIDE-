import React, { useEffect, useState } from "react";  // [1]
import { Link, useLocation } from "react-router-dom"; // [2]
import { Container, Navbar } from "react-bootstrap"; // [3]
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // [4]
import { MdEmail, MdCall } from "react-icons/md"; // [5]
import LogoImage from "../assets/images/site-logo.png";
import i18n from "../i18n";
import { useTranslation } from "react-i18next"; // [6]
import ReactFlagsSelect from "react-flags-select"; // [7]
import ProfileMenu from "../components/ProfileMenu";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // State to hold the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isAuthenticated,setIsAuthenticated]= useState(false)
  const [userName, setUserName]=useState("")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nextLng");
    const authToken = localStorage.getItem("AuthenticationToken") 
    const user = localStorage.getItem("UserName")
    setUserName(user ? user : "User")
    authToken ? setIsAuthenticated(true) : setIsAuthenticated(false )
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    } else {
      // If no language is stored in local storage, default to English
      setSelectedLanguage("GB");
      i18n.changeLanguage("GB");
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    if (isOpen) {
      toggle();
    }
  };

  const handleLanguageSelect = (e) => {
    const selectedValue = e;
    setSelectedLanguage(selectedValue);
    localStorage.setItem("i18nextLng", selectedValue); // Store selected language in local storage
    i18n.changeLanguage(selectedValue);
  };
  const onLogout = () => {
    localStorage.removeItem("AuthenticationToken");
    localStorage.removeItem("UserName");
    setIsAuthenticated(false);
  };
  return (
    <>
      <section id="topbar" className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <MdEmail />
              <a href="mailto:smarttourismguide@mailinator.com">
                {" "}
                smarttourismguide@mailinator.com
              </a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <MdCall />
              <span> +441521661480</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter">
              <FaTwitter />
            </a>
            <a href="#" className="facebook">
              <FaFacebook />
            </a>
            <a href="#" className="instagram">
              <FaInstagram />
            </a>
            <a href="#" className="linkedin">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      <section id="header">
        <Navbar expand="lg" className="navigation-bar sticky p-0">
          <Container>
            <Navbar.Brand className="pt-0">
              <img
                src={LogoImage}
                alt="Site Logo"
                className="img-fluid header-logo d-none d-md-block"
              />
              <img
                src={LogoImage}
                alt="Site Logo"
                className="img-fluid  header-logo d-md-none"
              />
            </Navbar.Brand>
            <div className="toggle-block" onClick={toggle}>
              <div className={`cta ${isOpen ? "active" : ""}`}>
                <div
                  className={`toggle-btn type1 ${isOpen ? "active" : ""}`}
                ></div>
              </div>
            </div>
            <Navbar.Collapse
              className={`justify-content-center ${isOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav navbar-right navmanu">
                <li className="nav-item" onClick={closeMenu}>
                  <Link
                    className={
                      location.pathname === "/" ? "active nav-link" : "nav-link"
                    }
                    to="/"
                  >
                    {t("Header.Menu1")}
                  </Link>
                </li>
                <li className="nav-item" onClick={closeMenu}>
                  <Link
                    className={
                      location.pathname?.includes("blog")
                        ? "active nav-link"
                        : "nav-link"
                    }
                    to="/blog-list"
                  >
                    {t("Header.Menu2")}
                  </Link>
                </li>
                <li className="nav-item" onClick={closeMenu}>
                  <Link className={
                      location.pathname === "/about-us" ? "active nav-link" : "nav-link"
                    } to="/about-us">
                    {t("Header.Menu4")}
                  </Link>
                </li>
                {isAuthenticated &&
                <li className="nav-item" onClick={closeMenu}>
                  <Link className={
                      location.pathname === "/ai-assistance" ? "active nav-link" : "nav-link"
                    } to="/ai-assistance">
                    {t("Header.Menu5")}
                  </Link>
                </li>}
              </ul>
            </Navbar.Collapse>
            {isAuthenticated && <ReactFlagsSelect
              showSelectedLabel={false}
              showOptionLabel={false}
              countries={["GB","PK","IN","BD","CN"]}
              selected={selectedLanguage}
              onSelect={(code) => handleLanguageSelect(code)}
            />}
            {!isAuthenticated ? 
            <Link to="/login" type="button" className="btn ml-5 btn-dark header-login-btn">Login</Link>
            : <ProfileMenu userName={userName} onLogout={onLogout} />}
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;

// [1] React, "React Documentation," [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: April 21, 2024].
// [2] React Training, "React Router Documentation," [Online]. Available: https://reactrouter.com/web/guides/quick-start. [Accessed: April 21, 2024].
// [4,5] react-icons, "React Icons Documentation," [Online]. Available: https://react-icons.github.io/react-icons/. [Accessed: April 21, 2024].
// [6] react-i18next. (n.d.). React i18next. Retrieved from https://react.i18next.com/
// [7] React Flags Select. (n.d.). React Flags Select. Retrieved from https://www.npmjs.com/package/react-flags-select