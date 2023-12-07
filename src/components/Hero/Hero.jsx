import "./Hero.css";
import { MdArrowOutward } from "react-icons/md";
import HeroCard from "./HeroCard";

const Header = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="main__container hero__container">
          <h1 className="hero__heading">
            High quality, reliable and proven products and systems
          </h1>
          <h2 className="hero__subheading">
            The Weldlok brand guarantees the right solution for all customers.
          </h2>
          <button className="hero__button">
            <MdArrowOutward className="text-[1.5rem]" />
            Find Out More
          </button>
          <div className="hero__animation">
            <HeroCard
              icon={"/images/industrial-icon.png"}
              heading={"industrial"}
              image={"/images/hero-industrial.png"}
            />
            <HeroCard
              icon={"/images/civil-icon.png"}
              heading={"civil"}
              image={"/images/hero-civil.jpeg"}
            />
            <HeroCard
              icon={"/images/architect.png"}
              heading={"architectural"}
              image={"/images/hero-architectural.jpeg"}
              className="bg-top"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
