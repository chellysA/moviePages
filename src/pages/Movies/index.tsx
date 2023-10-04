import SortMenu from "../../components/Sort-menu";
import Subtitle from "../../components/Subtitle";
import React, { useEffect } from "react";
import useGetMovies from "../../hooks/api/useGetMovies";
import useQueryParams from "../../hooks/useQueryParams";
import { useHistory } from "react-router-dom";
import Pager from "../../components/Pager";
import useGetGenre from "../../hooks/api/useGetGenre";
import FilmPosters, { IFilmPosterProps } from "../../components/FilmPosters";
import env from "../../constants/Enviroments";
import { useSelector } from "react-redux";
import useGetMoviesSortList from "../../hooks/api/useGetMovieSortList";

const Movies: React.FC = () => {
  const queries = useQueryParams();
  const history = useHistory();
  const page = queries.get("page");
  const sortBy = queries.get("sort_by");
  const year = queries.get("primary_release_year");
  const { getMovies } = useGetMovies(page ?? "1");
  const { getGenre } = useGetGenre("movie");
  const { getMoviesSortList } = useGetMoviesSortList(sortBy, page, year);
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
    if (queries.size === 0) {
      getMovies();
    }
  }, [queries]);

  useEffect(() => {
    if (sortBy || year) {
      getMoviesSortList();
    }
  }, [sortBy, year]);

  useEffect(() => {
    if (sortBy || year) {
      getMoviesSortList();
    } else {
      getMovies();
    }
  }, [page]);

  const filteredMovies = movies.filter((e: any) => e.poster_path !== null);

  const handlePage = (newPage: number | boolean) => {
    const hasPage = queries.has("page");
    if (hasPage) {
      queries.set("page", newPage.toString());
    } else {
      queries.append("page", newPage.toString());
    }
    console.log(queries);
    const newLocation = {
      pathname: "/movies",
      search: queries.toString(),
    };
    history.push(newLocation);
  };

  return (
    <div id="container" className="pt-32 px-4 flex flex-column">
      <Subtitle label="Movies"></Subtitle>
      <SortMenu filmType="movies" />
      <div className="flex grow flex-wrap justify-center ">
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
                backdrop_path={
                  backdrop_path !== null
                    ? `${env.URL_POSTER + backdrop_path}`
                    : ""
                }
                original_title={original_title}
                overview={overview}
                release_date={release_date && release_date.slice(0, 4)}
                vote_average={vote_average}
                filmType="movie"
                genre_ids={
                  genres?.length &&
                  genre_ids?.length &&
                  genres.filter((e: any) => {
                    return e.id === genre_ids[0];
                  })[0]?.name
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
