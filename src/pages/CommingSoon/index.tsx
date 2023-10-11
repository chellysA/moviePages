import useGetUpComing from "../../hooks/api/useGetUpComing";
import Subtitle from "../../components/Subtitle";
import React, { useEffect } from "react";
import useQueryParams from "../../hooks/useQueryParams";
import Pager from "../../components/Pager";
import { useSelector } from "react-redux";
import routes from "../../constants/Routes";
import { useHistory } from "react-router-dom";
import FilmPosters, { IFilmPosterProps } from "../../components/FilmPosters";
import env from "../../constants/Enviroments";

const CommingSoon = () => {
  const queries = useQueryParams();
  const history = useHistory();
  const page = queries.get("page");
  const { getUpComing } = useGetUpComing(page ?? "1");
  const { actualPage, totalPages } = useSelector<any, any>(
    (state) => state.pager
  );
  const { movies } = useSelector<any, any>((state) => state.movies);
  const { movieGenres } = useSelector<any, any>((state) => state.details);

  const handlePage = (newPage: number | boolean) => {
    const newLocation = {
      pathname: `${routes.COMING_SOON}`,
      search: `?page=${newPage}`,
    };
    history.push(newLocation);
  };

  useEffect(() => { 
    getUpComing();
  }, []);

  useEffect(() => { 
    if(queries.size !== 0){
    getUpComing();
    }
  }, [page]);

  return (
    <div id="container" className="pt-32 px-4 flex flex-col">
      <Subtitle label="Comming Soon"></Subtitle>
      <div className="flex flex-wrap justify-center grow mt-12">
        {movies?.length &&
          movieGenres?.length &&
          movies.map(
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
                filmType="movie"
                genre_ids={
                  movieGenres?.length &&
                  genre_ids?.length &&
                  movieGenres.filter((e: any) => {
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

export default CommingSoon;
