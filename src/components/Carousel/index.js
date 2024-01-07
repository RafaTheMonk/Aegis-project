import "./carousel.css";
import Slider from "react-slick";

function Carousel({ children }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptativeHeight: true,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default Carousel;
