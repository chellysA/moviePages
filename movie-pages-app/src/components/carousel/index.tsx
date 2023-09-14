import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieDescription from '../movieDescription';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { IFilmPosterProps } from '../filmPosters';

const Carousel: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };
  const URL_POSTER = 'https://image.tmdb.org/t/p/original';
  const { movies, genres } = useSelector<any, any>((state) => state.movies);

  return (
    <div>
      <Slider {...settings}>
        {movies.map(
          (
            {
              backdrop_path,
              original_title,
              overview,
              vote_average,
              release_date,
              genre_ids,
            }: IFilmPosterProps,
            index: any
          ) => {
            return (
              <div key={index}>
                <img
                  src={`${URL_POSTER + backdrop_path}`}
                  alt=""
                  className="w-full h-[650px] object-cover"
                />
                <div
                  id="shadow-mask"
                  className="w-full h-full absolute top-0 "
                ></div>
                <MovieDescription
                  original_title={original_title}
                  overview={overview}
                  vote_average={vote_average}
                  release_date={release_date}
                  genre_ids={
                    genres?.length &&
                    genre_ids?.length &&
                    genres.filter((e: any) => {
                      return e.id === genre_ids[0];
                    })[0].name
                  }
                />
              </div>
            );
          }
        )}
      </Slider>
    </div>
  );
};
export default Carousel;
