import "./About.css";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <>
      <section className="about">
        <img src="/images/about-image.png" alt="about-image" />
        <div className="about__description">
          <div className="about__description--heading">
            <h3 className="main__heading ">about weldlok</h3>
            <h2 className="about__description--title">
              Weldlok and Balltube: <br />
              Trusted Australian brands for 60+ years, serving infrastructure,
              mining, industrial, civil, and fabrication.
            </h2>
          </div>
          <div className="about__description--para">
            <p>
              We are specialists in the design and supply of high quality,
              durable grating, industrial and modular handrail, steel flooring,
              FRP flooring, and drainage grates and covers.
            </p>
          </div>
          <div className="about_description--number">
            <div className="number">
              <h3 className="number__digit">60+</h3>
              <h3 className="number__text">Years of Experience</h3>
            </div>
            <div className="number">
              <h3 className="number__digit">450</h3>
              <h3 className="number__text">Qualified Employees</h3>
            </div>
            <div className="number">
              <h3 className="number__digit">800+</h3>
              <h3 className="number__text">satisfied customers</h3>
            </div>
          </div>
          <button className="about__description--button">
            <MdArrowOutward />
            Learn More About Us
          </button>
        </div>
      </section>
    </>
  );
};

export default About;