import Subtitle from '../../components/subtitle';
import Brief from '../../components/brief';
import Carousel from '../../components/carousel';
import React, { useEffect } from 'react';
import Section from '../../components/section';
import Button from '../../components/button';
import { BsFillPlayFill } from 'react-icons/bs';
import FilmPosters from '../../components/filmPosters';
import useGetMovies from '../../hooks/api/useGetMovies';
import { IFilmPosterProps } from '../../components/filmPosters';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import useGetGenre from '../../hooks/api/useGetGenre';
import Pager from '../../components/pager';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addActualPage } from '../../redux/moviesSlice';
import useQueryParams from '../../hooks/useQueryParams';

const Home: React.FC = () => {
  const queries = useQueryParams();
  const page = queries.get('page');
  const { getMovies } = useGetMovies(page ?? '1');
  const { getGenre } = useGetGenre();
  const { movies, genres, totalPages, actualPage } = useSelector<any, any>(
    (state) => state.movies
  );
  const history = useHistory();
  const URL_POSTER = 'https://image.tmdb.org/t/p/original';
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies) {
      getGenre();
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [page]);

  const handlePage = (newPage: number | boolean) => {
    const newLocation = {
      pathname: '/',
      search: `?page=${newPage}`,
    };
    history.push(newLocation);
    dispatch(addActualPage(newPage));
  };
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
        <div className="flex flex-wrap justify-center">
          {movies?.length &&
            genres?.length &&
            movies.map(
              (
                {
                  poster_path,
                  original_title,
                  overview,
                  release_date,
                  vote_average,
                  genre_ids,
                  id,
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
                  filmType="Movie"
                  genre_ids={
                    genres?.length &&
                    genre_ids?.length &&
                    genres.filter((e: any) => {
                      return e.id === genre_ids[0];
                    })[0].name
                  }
                  id={id}
                />
              )
            )}
        </div>
      </Section>
      <Pager
        actualPages={actualPage}
        totalPages={totalPages}
        onClick={handlePage}
      />
    </>
  );
};

export default Home;
