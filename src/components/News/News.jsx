import "./News.css";
import { MdArrowOutward } from "react-icons/md";

const News = () => {
  return (
    <>
      <section className="news">
        <section className="news__top">
          <div className="news__top--heading">
            <h3 className="main__heading">News and events</h3>
            <h2 className="subheading">Our Latest News</h2>
          </div>
          <div className="news__button">
            <MdArrowOutward />
            <button className="news__button--btn">View All News</button>
          </div>
        </section>
      </section>
    </>
  );
};

export default News;
