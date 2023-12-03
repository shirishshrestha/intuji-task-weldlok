import React from "react";
import { MdArrowOutward } from "react-icons/md";

const HeroCard = ({ icon, heading, image }) => {
  return (
    <>
      <div className="hero__card">
        <div className="hero__title">
          <img src={icon} alt="icon" />
          <h4 className="hero__title--heading">{heading}</h4>
        </div>
        <div className="hero__image">
          <img src={image} alt="image" className="object-center" />
        </div>
        <button className="hero__btn">
          <MdArrowOutward className="hero__btn--icon text-[1.5rem]" />
        </button>
      </div>
    </>
  );
};

export default HeroCard;
