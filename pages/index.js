import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="fruits__container">
      <Slider {...settings}>
        <div className="single__slick">
          <img src="/images/01.jpg" alt="fruit" />
        </div>
        <div className="single__slick">
          <img src="/images/01.jpg" alt="fruit" />
        </div>
        <div className="single__slick">
          <img src="/images/01.jpg" alt="fruit" />
        </div>
        <div className="single__slick">
          <img src="/images/01.jpg" alt="fruit" />
        </div>
        <div className="single__slick">
          <img src="/images/01.jpg" alt="fruit" />
        </div>
        <div className="single__slick">
          <img src="/images/01.jpg" alt="fruit" />
        </div>
      </Slider>
    </div>
  );
}
