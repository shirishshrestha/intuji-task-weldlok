import "./Navigation.css";
import { FaCaretDown } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <div className="main__container">
          <div className="navbar__container">
            <a href="/">
              <img src="/images/icon.png" alt="logo" />
            </a>
            <ul className="navbar__menu">
              <li className="navbar__menu--list">
                <a href="#">Home</a>
              </li>
              <li className="navbar__menu--list">
                Our Products <FaCaretDown />
              </li>
              <li className="navbar__menu--list">
                Customers <FaCaretDown />
              </li>
              <li className="navbar__menu--list">
                About Us <FaCaretDown />
              </li>
              <li className="navbar__menu--list">
                News <FaCaretDown />
              </li>
              <li className="navbar__menu--list">Contact Us</li>
            </ul>
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
        </div>
      </nav>
    </>
  );
};

export default Navigation;
