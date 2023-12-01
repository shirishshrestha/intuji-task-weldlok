import { MdArrowOutward } from "react-icons/md";

const SolutionsCard = ({ image, heading, para }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="civil drainage" className="card__image" />
        <div className="card__description">
          <h3 className="card__heading">{heading}</h3>
          <div className="card__para">
            <p>{para}</p>
          </div>
        </div>
        <button className="card__button">
          <MdArrowOutward /> View Product
        </button>
      </div>
    </>
  );
};

export default SolutionsCard;
