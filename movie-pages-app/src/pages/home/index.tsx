import Subtitle from '../../components/subtitle';
import Brief from '../../components/brief';
import Carousel from '../../components/carousel';
import React, { useEffect } from 'react';
import Section from '../../components/section';
import Button from '../../components/button';
import { BsFillPlayFill } from 'react-icons/bs';
import FilmPosters from '../../components/filmPosters';
import Pagination from '../../components/pagination';
import useGetMovies from '../../hooks/api/useGetMovies';
import { IFilmPosterProps } from '../../components/filmPosters';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import useGetGenre from '../../hooks/api/useGetGenre';

const Home: React.FC = () => {
  const { getMovies } = useGetMovies();
  const { getGenre } = useGetGenre();
  const { movies, genres } = useSelector<any, any>((state) => state.movies);

  const URL_POSTER = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    console.log(movies);
    if (movies) {
      getMovies();
      getGenre();
    }
  }, []);

  return (
    <>
      <Carousel />

      <Brief />
      <Section>
        <div className="flex px-8 py-4">
          <Subtitle label="Trending" />
          <div className="flex justify-between w-[250px]">
            <Button
              label="Movies"
              icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
              border={true}
            />
            <Button
              label="TV Shows"
              icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
              border={true}
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="container flex flex-wrap justify-center md:justify-start">
          {movies?.length &&
            movies.map(
              (
                {
                  poster_path,
                  original_title,
                  overview,
                  release_date,
                  vote_average,
                  genre_ids,
                }: IFilmPosterProps,
                index: any
              ) => (
                <FilmPosters
                  key={index}
                  poster_path={`${URL_POSTER + poster_path}`}
                  original_title={original_title}
                  overview={overview}
                  release_date={release_date && release_date.slice(0, 4)}
                  vote_average={vote_average}
                  filmType="Movies"
                  genre_ids={
                    genres.filter((e: any) => {
                      return e.id === genre_ids?.slice(0, 1)[0];
                    })[0].name
                  }
                />
              )
            )}
        </div>
      </Section>
      <Pagination />
    </>
  );
};

export default Home;
