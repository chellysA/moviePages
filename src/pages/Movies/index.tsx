import SortMenu from '../../components/Sort-menu';
import Subtitle from '../../components/Subtitle';
import React, { useEffect } from 'react';
import useGetMovies from '../../hooks/api/useGetMovies';
import useQueryParams from '../../hooks/useQueryParams';
import { useHistory } from 'react-router-dom';
import Pager from '../../components/Pager';
import useGetGenre from '../../hooks/api/useGetGenre';
import FilmPosters, { IFilmPosterProps } from '../../components/FilmPosters';
import env from '../../constants/Enviroments';
import { useSelector } from 'react-redux';
import useGetMoviesSortList from '../../hooks/api/useGetSortMovieList';

const Movies: React.FC = () => {
  const queries = useQueryParams();
  const history = useHistory();
  const page = queries.get('page');
  const sortBy = queries.get('sort_by');
  const year = queries.get('primary_release_year');
  const { getMovies } = useGetMovies(page ?? '1');
  const { getGenre } = useGetGenre();
  const { getMoviesSortList } = useGetMoviesSortList(sortBy, '1');
  const { movies } = useSelector<any, any>((state) => state.movies);
  const { genres } = useSelector<any, any>((state) => state.details);
  const { actualPage, totalPages } = useSelector<any, any>(
    (state) => state.pager
  );

  useEffect(() => {
    if (movies) {
      getGenre();
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [page]);

  useEffect(() => {
    if (sortBy) {
      getMoviesSortList();
    }
  }, [sortBy]);

  useEffect(() => {
    if (year) {
      getMoviesSortList();
    }
  }, [year]);

  const filteredMovies = movies.filter((e: any) => e.poster_path !== null);

  const handlePage = (newPage: number | boolean) => {
    const newLocation = {
      pathname: '/movies',
      search: `?page=${newPage}`,
    };
    history.push(newLocation);
  };

  return (
    <div className="pt-32 px-4">
      <Subtitle label="Movies"></Subtitle>
      <SortMenu />
      <div className="flex flex-wrap justify-center">
        {movies?.length &&
          genres?.length &&
          filteredMovies.map(
            (
              {
                poster_path,
                backdrop_path,
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
                poster_path={`${env.URL_POSTER + poster_path}`}
                backdrop_path={`${env.URL_POSTER + backdrop_path}`}
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
      <Pager
        actualPages={actualPage}
        totalPages={totalPages}
        onClick={handlePage}
      />
    </div>
  );
};

export default Movies;
