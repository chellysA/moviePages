import useGetVideos from '../../hooks/api/useGetVideos';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useGetDetails from '../../hooks/api/useGetDetails';
import Section from '../../components/Section';
import { AiFillStar } from 'react-icons/ai';
import useGetCredits from '../../hooks/api/useGetCredits';
import env from '../../constants/Enviroments';
import useGetSimilar from '../../hooks/api/useGetSimilar';
import FilmPosters, { IFilmPosterProps } from '../../components/FilmPosters';
import useGetGenre from '../../hooks/api/useGetGenre';
import Subtitle from '../../components/Subtitle';

const Overview = () => {
  const { id }: any = useParams();
  const { videos, details, credits, similar, genres } = useSelector<any, any>(
    (state) => state.details
  );
  const { getVideos } = useGetVideos(id);
  const { getDetails } = useGetDetails(id);
  const { getCredits } = useGetCredits(id);
  const { getSimilar } = useGetSimilar(id);
  const { getGenre } = useGetGenre();

  useEffect(() => {
    getDetails();
    getCredits();
    getVideos();
    getSimilar();
    getGenre();
  }, [id]);
  console.log(similar);
  const imdb = details.vote_average?.toFixed(1);
  let regex = /[,]/;
  const country =
    details.production_countries &&
    details.production_countries.map((e: any) => e.name).join(', ');

  const videoKey = videos?.filter((e: any) => {
    return e.type === 'Trailer';
  })[0]?.key;

  const genre =
    details.genres && details.genres.map((e: any) => e.name).join(', ');

  const cast =
    credits &&
    credits
      .slice(0, 3)
      .map((e: any) => e.name)
      .join(', ');

  const productionCompany =
    details.production_companies && details.production_companies[0]?.name;

  return (
    <>
      <Section>
        <div className="px-8 text-gray-100 pt-24">
          <h1 className="">{details.original_title}</h1>
          <p>{details.tagline}</p>
          <hr className="text-gray-100 mb-10"></hr>
          {videos.length && (
            <iframe
              id="video"
              className="w-full h-[500px] mb-10"
              src={`https://www.youtube-nocookie.com/embed/${videoKey}?rel=0&amp;controls=0&amp;showinfo=0`}
            ></iframe>
          )}
          <hr className="mb-10"></hr>
          <div className="flex mb-10">
            <div>
              <img
                src={`${env.URL_POSTER + details.poster_path}`}
                width={300}
                alt=""
                className="border-double border-8 border-gray-50 rounded-lg"
              />
            </div>
            <div className="w-3/4 ml-8">
              <h1>{details.original_title}</h1>
              <div className="flex text-gray-50">
                <div className="bg-principal-200 rounded-sm w-[28px] h-[18px] mt-1 mr-4">
                  <p className="text-[12px] text-black text-center">HD</p>
                </div>
                <AiFillStar className="mt-1 mr-1" />
                <p className="text-gray-50"> {imdb}</p>
                <p className="text-gray-50 ml-4">{details.runtime} min</p>
              </div>
              <p className="text-gray-50">{details.overview}</p>
              <div className="flex justify-between w-3/5">
                <div>
                  {country && (
                    <p className="text-gray-50">
                      {regex.test(country) ? 'Countries:' : 'Country:'}
                    </p>
                  )}
                  {genre && <p className="text-gray-50">Genre:</p>}
                  {details.release_date && (
                    <p className="text-gray-50">Released:</p>
                  )}
                  {cast && <p className="text-gray-50">Cast:</p>}
                  {productionCompany && (
                    <p className="text-gray-50">Produced by:</p>
                  )}
                </div>
                <div>
                  {country && <p className="text-gray-50">{country}</p>}
                  {genre && <p className="text-gray-50">{genre}</p>}
                  {details.release_date && (
                    <p className="text-gray-50">
                      {details.release_date?.slice(0, 4)}
                    </p>
                  )}
                  {cast && <p className="text-gray-50">{cast}</p>}
                  {productionCompany && (
                    <p className="text-gray-50">{productionCompany}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {similar.length && (
        <>
          <Subtitle label="You May Also Like" />
          <div className="flex flex-wrap justify-center mt-10">
            {similar?.length &&
              genres?.length &&
              similar
                .slice(0, 10)
                .map(
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
        </>
      )}
    </>
  );
};

export default Overview;
