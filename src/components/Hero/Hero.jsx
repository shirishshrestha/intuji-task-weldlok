import "./Hero.css";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="header">
        <section className="hero">
          <h1 className="hero__heading">
            High quality, reliable and proven products and systems
          </h1>
          <h2 className="hero__subheading">
            The Weldlok brand guarantees the right solution for all customers.
          </h2>
          <button className="hero__button">
            <MdArrowOutward />
            Find Out More
          </button>
        </section>
      </header>
    </>
  );
};

export default Header;
