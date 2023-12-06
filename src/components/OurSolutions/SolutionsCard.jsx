import { MdArrowOutward } from "react-icons/md";

const SolutionsCard = ({ image, heading, para, id }) => {
  return (
    <>
      <figure className="card" id={id}>
        <img src={image} alt="civil drainage" className="card__image" />
        <figcaption className="card__description">
          <h3 className="card__heading">{heading}</h3>
          <div className="card__para">
            <p>{para}</p>
          </div>
        </figcaption>
        <button className="card__button">
          <MdArrowOutward /> View Product
        </button>
      </figure>
    </>
  );
};

export default SolutionsCard;
