import { useSelector } from 'react-redux';
import Subtitle from '../../components/Subtitle';
import React, { useEffect } from 'react';
import FilmPosters, { IFilmPosterProps } from '../../components/FilmPosters';
import Section from '../../components/Section';
import env from '../../constants/Enviroments';
import useQueryParams from '../../hooks/useQueryParams';
import useGetSearcher from '../../hooks/api/useGetSearcher';
import Pager from '../../components/Pager';
import { useHistory } from 'react-router-dom';
import routes from '../../constants/Routes';

const SearchResults = () => {
  const queries = useQueryParams();
  const history = useHistory()
  const movieTitle = queries.get('q');
  const page = queries.get('page')
  const { getSearcher } = useGetSearcher(movieTitle, page ?? '1');
  const { searcher } = useSelector<any, any>((state) => state.searcher);
  const { movieGenres } = useSelector<any, any>((state) => state.details);
  const { totalPages, actualPage } = useSelector<any, any>(
    (state) => state.pager
  );

  useEffect(() => {
    getSearcher();
  }, [page]);

  const handlePage = (newPage: number | boolean) => {
    const hasPage = queries.has("page");
    if (hasPage) {
      queries.set("page", newPage.toString());
    } else {
      queries.append("page", newPage.toString());
    }
    const newLocation = {
      pathname: `${routes.SEARCH_RESULTS}`,
      search: queries.toString(),
    };
    history.push(newLocation);
  };

const filteredMovies = searcher.filter((e: any) => e.poster_path !== null);
  return (
    <div id="container" className='flex flex-col'>
      <Section>
        <div className="px-8 pt-24 grow">
          <Subtitle label={`Results for: ${movieTitle}`} />
          <Section>
            <div className="flex flex-wrap justify-center pt-20">
              {searcher.length &&
                movieGenres.length &&
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
                          movieGenres?.length &&
                          genre_ids?.length &&
                          movieGenres.filter((e: any) => {
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
      <Pager actualPages={actualPage} totalPages={totalPages} onClick={handlePage}/>
    </div>
  );
};

export default SearchResults;
