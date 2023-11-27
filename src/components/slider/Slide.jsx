import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from "../../imgs/slide1.webp";
import slide2 from "../../imgs/slider2.jpeg";
import slide3 from "../../imgs/slide3.jpeg";
import slide4 from "../../imgs/slide4.webp";

const Slide = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button class="slick-prev">Previous</button>,
    nextArrow: <button class="slick-next">Next</button>,
  };

  return (
    <div className="slide container">
      <Slider {...settings}>
        <img src={slide1} alt="" />
        <img src={slide2} alt="" />
        <img src={slide3} alt="" />
        <img src={slide4} alt="" />
      </Slider>
    </div>
  );
};

export default Slide;
