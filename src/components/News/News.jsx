import "./News.css";
import { MdArrowOutward } from "react-icons/md";

const News = () => {
  return (
    <>
      <section className="news">
        <div className="main__container news__container">
          <div className="news__top">
            <div className="news__top--heading">
              <h3 className="main__heading">News and events</h3>
              <h2 className="subheading">Our Latest News</h2>
            </div>
            <div className="news__button cursor-pointer">
              <MdArrowOutward />
              <button className="news__button--btn">View All News</button>
            </div>
          </div>
          <div className="news__content">
            <div className="news__content--left">
              <img
                src="/images/news-role.png"
                alt=""
                className="news__content--left__image"
              />
              <div className="news__main">
                <div className="news__field">
                  <span className="news__field--title">Industrial</span>
                  <span className="news__field--date">july 19, 2023</span>
                </div>
                <h4 className="news__main--heading">
                  The Role Of Effective Grates And Drain Covers In Floods &
                  Heavy Rain
                </h4>
                <div className="news__main--para">
                  <p>
                    Floods are the most expensive disaster in Australia, causing
                    social, economic, and environmental disruptions. The direct
                    costs associated with floods estimated over the period...
                  </p>
                </div>
                <button className="comp__content--button">
                  <MdArrowOutward />
                  Learn More
                </button>
              </div>
            </div>
            <div className="news__content--right">
              <div className="news--right__comp">
                <img src="/images/news-ductile.png" alt="" className="news--right__comp--image"/>
                <div className="comp__content">
                  <div className="news__field">
                    <span className="news__field--title">civil</span>
                    <span className="news__field--date">july 19, 2023</span>
                  </div>
                  <h4 className="comp__content--heading h-[63px] max-[850px]:h-auto">
                    Ductile Solutions For Civil Drainage
                  </h4>
                  <button className="comp__content--button">
                    <MdArrowOutward />
                    Learn More
                  </button>
                </div>
              </div>
              <div className="news--right__comp">
                <img src="/images/news-benefits.png" alt="" className="news--right__comp--image"/>
                <div className="comp__content">
                  <div className="news__field">
                    <span className="news__field--title">architectural</span>
                    <span className="news__field--date">july 19, 2023</span>
                  </div>
                  <h4 className="comp__content--heading h-[63px] max-[850px]:h-auto">
                    The Benefits Of Aluminium Stair Treads
                  </h4>
                  <button className="comp__content--button">
                    <MdArrowOutward />
                    Learn More
                  </button>
                </div>
              </div>
              <div className="news--right__comp">
                <img src="/images/news-stair.png" alt="" className="news--right__comp--image"/>
                <div className="comp__content">
                  <div className="news__field">
                    <span className="news__field--title">Industrial</span>
                    <span className="news__field--date">july 19, 2023</span>
                  </div>
                  <h4 className="comp__content--heading h-[63px] max-[850px]:h-auto">
                    Understanding Stair Treads
                  </h4>
                  <button className="comp__content--button">
                    <MdArrowOutward />
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
