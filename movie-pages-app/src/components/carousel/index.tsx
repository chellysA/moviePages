import React from 'react';
import Slider from 'react-slick';
import CarouselImg from '../../constants/CarouselImg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieDescription from '../movieDescription';

const Carousel: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {CarouselImg.map(({ src, alt }, index) => {
          return (
            <div key={index}>
              <img
                src={src}
                alt={alt}
                className="w-full h-[600px] relative object-cover"
              />
              <div
                id="shadow-mask"
                className="w-full h-full absolute top-0 "
              ></div>
              <MovieDescription />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
