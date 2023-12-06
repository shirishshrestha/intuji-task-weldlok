import { useState } from "react";
import "./Navigation.css";
import { MdPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dropdown } from "flowbite-react";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
      <section className="navbar">
        <div className="main__container navbar__container">
          <figure className="navbar__logo">
            <a href="/">
              <img src="/images/icon.png" alt="logo" className="navbar__logo" />
            </a>
            <button className="hamburger" onClick={toggleNav}>
              <GiHamburgerMenu />
            </button>
          </figure>
          <nav>
            <ul className={`navbar__menu ${navOpen ? "open" : ""}`}>
              <li className="navbar__menu--list">
                <a href="#">Home</a>
              </li>
              <li className="navbar__menu--list">
                <Dropdown
                  label={`OUR PRODUCTS  ▾ `}
                  className="navbar__dropdown"
                  inline
                >
                  <Dropdown.Item className="">
                    <a href="#civil">Civil Drainage Products</a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a href="#flooring">Flooring & Grating Solutions</a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a href="#handrail">Handrail Systems</a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a href="#mastermesh">Mastermesh Expanded Perforated</a>
                  </Dropdown.Item>
                </Dropdown>
              </li>
              <li className="navbar__menu--list">
                <a href="#customers" className="navbar__menu--anchor">
                  Customers ▾
                </a>
              </li>
              <li className="navbar__menu--list">
                <a href="#about" className="navbar__menu--anchor">
                  About Us ▾
                </a>
              </li>
              <li className="navbar__menu--list">
                <a href="#news" className="navbar__menu--anchor">
                  News ▾
                </a>
              </li>
              <li className="navbar__menu--list">
                <a href="#footer">Contact Us</a>
              </li>
              <div className={`contact__hidden ${navOpen ? "open" : ""}`}>
                <a href="tel:1800 935 356">
                  <div className="navbar__contact--icon">
                    <MdPhone className="contact__hidden--icon" />
                  </div>
                </a>
                <a href="tel:1800 935 356">
                  <span className="navbar__number">1800 935 356</span>
                </a>
              </div>
            </ul>
          </nav>
          <div className="navbar__contact">
            <a href="tel:1800 935 356">
              <div className="navbar__contact--icon">
                <MdPhone />
              </div>
            </a>
            <a href="tel:1800 935 356">
              <span className="navbar__number">1800 935 356</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigation;
