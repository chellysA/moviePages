import { useSelector } from 'react-redux';
import Subtitle from '../../components/Subtitle';
import React, { useEffect } from 'react';
import FilmPosters, { IFilmPosterProps } from '../../components/FilmPosters';
import Section from '../../components/Section';
import env from '../../constants/Enviroments';
import useQueryParams from '../../hooks/useQueryParams';
import useGetSearcher from '../../hooks/api/useGetSearcher';

const SearchResults = () => {
  const queries = useQueryParams();
  const movieTitle = queries.get('q');
  const { getSearcher } = useGetSearcher(movieTitle);
  const { searcher } = useSelector<any, any>((state) => state.searcher);
  const { genres } = useSelector<any, any>((state) => state.details);

  useEffect(() => {
    getSearcher();
  }, []);

  return (
    <>
      <Section>
        <div className="px-8 pt-24">
          <Subtitle label={`Results for: ${movieTitle}`} />
          <Section>
            <div className="flex flex-wrap justify-center pt-20">
              {searcher.length &&
                genres.length &&
                searcher.map(
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
                  ) => {
                    return (
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
                    );
                  }
                )}
            </div>
          </Section>
        </div>
      </Section>
    </>
  );
};

export default SearchResults;
