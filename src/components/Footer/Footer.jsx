import "./Footer.css";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="main__container footer__container">
          <div className="footer__top">
            <div className="footer__top--title">
              <h3 className="main__heading">Enquire now</h3>
              <h2 className="subheading capitalize">
                For more information
                <div>
                  <span className="text-[#F80102] capitalize">
                    on products and services
                  </span>
                </div>
              </h2>
            </div>
            <button className="footer__top--button">
              <MdArrowOutward />
              request a quote
            </button>
          </div>
          <div className="footer__menu">
            <div className="footer__menu--desc">
              <figure>
                <img src="images/icon.png" alt="" className="w-[12.5rem] " />
              </figure>
              <div className="footer__menu--para">
                <p>
                  We are on a mission to invest in new products and systems
                  which will provide the Australian market with innovative
                  solutions.
                </p>
              </div>
            </div>
            <div className="footer__menu--links">
              <span className="menu--links__heading">quick links</span>
              <div>
                <ul className="menu--links__list">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#customers">Our Customers </a>
                  </li>
                  <li>
                    <a href="#news">News</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#footer">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__menu--links">
              <span className="menu--links__heading">products range</span>
              <div>
                <ul className="menu--links__list">
                  <li>
                    <a href="#civil">Civil Drainage Products</a>
                  </li>
                  <li>
                    <a href="#flooring">Flooring & Grating Solutions</a>
                  </li>
                  <li>
                    <a href="#handrail">Handrail Systems </a>
                  </li>
                  <li>
                    <a href="#mastermesh">Mastermesh Expanded Perforated</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__menu--review " id="footer">
              <h4 className="menu--links__heading w-[17.4375rem]">
                Subscribe To Our Newsletter
              </h4>
              <div className="review--mail text-black">
                <input
                  type="email"
                  className="review--input"
                  placeholder="Email address"
                />
                <button className="review--button p-[0.62rem] ">
                  <FaArrowRight />
                </button>
              </div>
              <div className="footer__icons">
                <FaLinkedin className="w-[1.5rem] h-[1.5rem]" />
                <FaYoutube className="w-[1.5rem] h-[1.5rem]" />
                <FaFacebook className="w-[1.5rem] h-[1.5rem]" />
                <FaTwitter className="w-[1.5rem] h-[1.5rem]" />
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom--text">
              <span>&copy; {year} by NEPEAN Building and Infrastructure.</span>
              <div>
                <p>
                  Weldlok® is a registered trademark of NEPEAN Building &
                  Infrastructure.
                </p>
              </div>
            </div>
            <div className="footer__bottom--text">
              Privacy Policy | Internet Policy | Terms & Conditions of Sale |
              Conditions of Purchase
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
