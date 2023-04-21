import axios from "axios";
import styles from "./Slider.scss";
import { useEffect, useState } from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Slider() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(" http://localhost:4567/slider")
      .then(function (response) {
        setData(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider">
      <Sliders {...settings}>
        {data?.data.map((item) => (
          <img src={item.src} alt="" className="sliderImg" key={item.id} />
        ))}
      </Sliders>
    </div>
  );
}

export default Slider;
