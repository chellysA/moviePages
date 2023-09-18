import Subtitle from '../../components/Subtitle';
import Brief from '../../components/Brief';
import Carousel from '../../components/Carousel';
import React, { useEffect } from 'react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import { BsFillPlayFill } from 'react-icons/bs';
import FilmPosters from '../../components/FilmPosters';
import useGetNowPlaying from '../../hooks/api/useGetNowPlaying';
import { IFilmPosterProps } from '../../components/FilmPosters';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import useGetGenre from '../../hooks/api/useGetGenre';
import Pager from '../../components/Pager';
import { Link, useHistory } from 'react-router-dom';
import useQueryParams from '../../hooks/useQueryParams';
import env from '../../constants/Enviroments';

const Home: React.FC = () => {
  const queries = useQueryParams();
  const page = queries.get('page'); // Toma el valor del query search page por ejemplo ?page=1
  const { getNowPlaying } = useGetNowPlaying(page ?? '1');
  const { getGenre } = useGetGenre();
  const { nowPlaying } = useSelector<any, any>((state) => state.nowPlaying);
  const { totalPages, actualPage } = useSelector<any, any>(
    (state) => state.pager
  );
  const { genres } = useSelector<any, any>((state) => state.details);
  const history = useHistory();

  useEffect(() => {
    if (nowPlaying) {
      getGenre();
    }
  }, []);

  useEffect(() => {
    getNowPlaying();
  }, [page]);

  const handlePage = (newPage: number | boolean) => {
    const newLocation = {
      pathname: '/',
      search: `?page=${newPage}`,
    };
    history.push(newLocation);
  };
  return (
    <>
      <Carousel />

      <Brief />
      <Section>
        <div className="flex px-8 py-4">
          <Subtitle label="Trending" />
          <div className="flex justify-between w-[250px]">
            <Link to="/movies" className="no-underline">
              <Button
                label="Movies"
                icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
                border={true}
              />
            </Link>
            <Link to="/tv-shows" className="no-underline">
              <Button
                label="TV Shows"
                icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
                border={true}
              />
            </Link>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-wrap justify-center">
          {nowPlaying?.length &&
            genres?.length &&
            nowPlaying.map(
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
                  poster_path={`${env.URL_POSTER + poster_path}`}
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
