import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Button from '../Button';
import { BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export interface IFilmPosterProps {
  overview?: string;
  quality?: string;
  release_date?: string;
  genre_ids?: string;
  vote_average?: number;
  original_title?: string;
  filmType?: string;
  poster_path?: string;
  backdrop_path?: string;
  id: number;
}

const FilmPosters = ({
  overview,
  quality,
  release_date,
  genre_ids,
  vote_average,
  original_title,
  filmType,
  poster_path,
  backdrop_path,
  id,
}: IFilmPosterProps) => {
  return (
    <>
      <div
        id="filmPoster"
        className="relative w-[200px] h-[300px] mb-[120px] mx-6"
      >
        <div id="nohover">
          <img
            src={poster_path}
            alt=""
            className="relative rounded-md min-h-[300px]"
          ></img>

          <p className="text-gray-100 truncate py-2 m-0">{original_title}</p>
          <div className="flex justify-around">
            <p className="text-gray-50 text-[15px]">{release_date}</p>
            <div className="w-[5px] h-[5px] bg-gray-100 rounded-md mt-2 mx-1"></div>
            <p className="text-[15px]">{genre_ids}</p>
            <div>
              <p className="text-gray-50 text-[13px] border px-1 rounded-md ml-4">
                {filmType}
              </p>
            </div>
          </div>
        </div>
        <div
          id="descriptionFilm"
          className="absolute bottom-[50px] w-full h-5/6 bg-black"
        >
          <img src={backdrop_path} alt="" className="rounded-md mb-2"></img>
          <p className="text-gray-100 text-[14px] h-[190px] overflow-hidden">
            {overview}
          </p>
          <div className="flex justify-start mb-1">
            <AiFillStar className="text-principal-200 mb-1" />
            <p className="text-[13px] text-white m-0">{vote_average}</p>
          </div>
          <div className="flex justify-center">
            <Link to={`/movie/${id}`} className="no-underline">
              <Button
                icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
                label="Whatch now"
                border={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmPosters;
