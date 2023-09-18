import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { IFilmPosterProps } from '../FilmPosters';
import MovieDescription from '../MovieDescription';
import env from '../../constants/Enviroments';

const Carousel: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
    arrows: false,
  };

  const { nowPlaying, genres } = useSelector<any, any>(
    (state) => state.nowPlaying
  );
  return (
    <div>
      <Slider {...settings} className="mb-8">
        {nowPlaying?.map(
          (
            {
              backdrop_path,
              original_title,
              overview,
              vote_average,
              release_date,
              genre_ids,
              id,
              poster_path,
            }: IFilmPosterProps,
            index: any
          ) => {
            return (
              <div key={index}>
                <div
                  style={{
                    backgroundImage: `url(${env.URL_POSTER + backdrop_path})`,
                  }}
                  className="w-full h-[98vh] md:h-[650px] bg-cover bg-no-repeat bg-center "
                >
                  <div
                    id="shadow-mask"
                    className="w-full h-full md:h-[101%] relative bottom-[0px] pb-2 flex items-end"
                  >
                    <MovieDescription
                      original_title={original_title}
                      overview={overview}
                      vote_average={vote_average}
                      release_date={release_date?.slice(0, 4)}
                      genre_ids={
                        genres?.length &&
                        genre_ids?.length &&
                        genres.filter((e: any) => {
                          return e.id === genre_ids[0];
                        })[0].name
                      }
                      id={id}
                    />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </Slider>
    </div>
  );
};
export default Carousel;