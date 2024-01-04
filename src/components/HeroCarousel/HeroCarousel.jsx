"use client";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./HeroCarousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HeroCarousel = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "slides"
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
            <video autoPlay muted playsInline disableRemotePlayback>
                <source 
                    src="https://images.samsung.com/is/content/samsung/assets/ar/eureka2024/HOME_Eureka_Invitation-KV_1440x640_pc.mp4"
                    type="video/mp4"    
                />
            </video>
        </div>
        <div>
            <img src="https://cdn.luna.com.uy/zonaphone.com/files/tmp/compressed/normal/euldt6xsy5wdxhroulre.png" alt="" className="rounded-lg" />
        </div>
      </Slider>
    </div>
  );

}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="arrow right-0" onClick={onClick}>
      <BsChevronRight />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="arrow left-0" onClick={onClick}>
      <BsChevronLeft />
    </button>
  );
}