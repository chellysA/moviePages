import useGetTvShows from "../../hooks/api/useGetTvShows";
import SortMenu from "../../components/Sort-menu";
import Subtitle from "../../components/Subtitle";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Section from "../../components/Section";
import FilmPosters, { IFilmPosterProps } from "../../components/FilmPosters";
import env from "../../constants/Enviroments";
import useGetGenre from "../../hooks/api/useGetGenre";
import Pager from "../../components/Pager";
import { useHistory } from "react-router";
import useQueryParams from "../../hooks/useQueryParams";
import useGetSortTvShows from "../../hooks/api/useGetSortTvShows";

const TvShows = () => {
  const history = useHistory();
  const queries = useQueryParams();
  const page = queries.get("page");
  const sortBy = queries.get("sort_by");
  //const year = queries.get("primary_release_year");
  const { getSortTvShows } = useGetSortTvShows(sortBy, "1");
  const { getTvShows } = useGetTvShows(page ?? "1");
  const { getGenre } = useGetGenre("tv");
  const { tvShows } = useSelector<any, any>((state) => state.tvShows);
  const { genres } = useSelector<any, any>((state) => state.details);
  const { actualPage, totalPages } = useSelector<any, any>(
    (state) => state.pager
  );

  useEffect(() => {
    getTvShows();
  }, [page]);

  useEffect(() => {
    if (tvShows) {
      getGenre();
    }
  }, []);

  useEffect(() => {
    if (sortBy) {
      getSortTvShows();
    }
  }, [sortBy]);

  {
    /*  useEffect(() => {
    if (year) {
      getSortTvShows();
    }
  }, [year]);*/
  }
  const filteredTvShows = tvShows.filter((e: any) => e.poster_path !== null);
  const handlePage = (newPage: number | boolean) => {
    const newLocation = {
      pathname: "/tv_shows",
      search: `?page=${newPage}`,
    };
    history.push(newLocation);
  };

  return (
    <div className="pt-32 px-4">
      <Subtitle label="TV Shows"></Subtitle>
      <SortMenu filmType="tv_shows" />
      <Section>
        <div className="flex flex-wrap justify-center">
          {tvShows?.length &&
            genres.length &&
            filteredTvShows.map(
              (
                {
                  poster_path,
                  backdrop_path,
                  original_title,
                  overview,
                  genre_ids,
                  vote_average,
                  first_air_date,
                  name,
                  id,
                }: IFilmPosterProps,

                index: any
              ) => (
                <FilmPosters
                  key={index}
                  name={name}
                  poster_path={`${env.URL_POSTER + poster_path}`}
                  backdrop_path={`${env.URL_POSTER + backdrop_path}`}
                  original_title={original_title}
                  overview={overview}
                  first_air_date={first_air_date && first_air_date.slice(0, 4)}
                  vote_average={vote_average?.toFixed(1)}
                  filmType="tv_shows"
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
      </Section>
      <Pager
        actualPages={actualPage}
        totalPages={totalPages}
        onClick={handlePage}
      />
    </div>
  );
};

export default TvShows;
