import "./Navigation.css";
import { FaCaretDown } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const Navigation = () => {
  return (
    <>
      <section className="navbar">
        <div className="main__container navbar__container">
          <figure>
            <a href="/">
              <img src="/images/icon.png" alt="logo" className="navbar__logo" />
            </a>
          </figure>
          <nav>
            <ul className="navbar__menu">
              <li className="navbar__menu--list">
                <a href="#">Home</a>
              </li>
              <li className="navbar__menu--list">
                <a href="#" className="navbar__menu--anchor">
                  Our Products <FaCaretDown />
                </a>
              </li>
              <li className="navbar__menu--list">
                <a href="#customers" className="navbar__menu--anchor">
                  Customers <FaCaretDown />
                </a>
              </li>
              <li className="navbar__menu--list">
                <a href="#about" className="navbar__menu--anchor">
                  About Us <FaCaretDown />
                </a>
              </li>
              <li className="navbar__menu--list">
                <a href="#news" className="navbar__menu--anchor">
                  News <FaCaretDown />
                </a>
              </li>
              <li className="navbar__menu--list">
                <a href="#footer">Contact Us</a>
              </li>
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
