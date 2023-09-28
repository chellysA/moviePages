import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "../Button";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export interface IFilmPosterProps {
  overview?: string;
  quality?: string;
  release_date?: string;
  genre_ids?: string;
  vote_average?: any;
  original_title?: string;
  filmType?: string;
  poster_path?: string;
  backdrop_path?: string;
  id: number;
  name?: string;
  first_air_date?: string;
}

const FilmPosters = ({
  overview,
  release_date,
  genre_ids,
  name,
  vote_average,
  original_title,
  filmType,
  poster_path,
  backdrop_path,
  first_air_date,
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
            className="relative rounded-md min-h-[300px] max-h-[300px]"
          ></img>

          <p className="text-gray-100 truncate py-2 m-0">
            {original_title || name}
          </p>
          <div className="flex justify-around">
            <p className="text-gray-50 text-[15px]">
              {release_date || first_air_date}
            </p>
            <div className="w-[5px] h-[5px] bg-gray-100 rounded-md mt-2 mx-1"></div>
            <p className="text-[15px] truncate">{genre_ids}</p>
            <div>
              <p className="text-gray-50 text-[13px] border px-1 rounded-md ml-4">
                {filmType}
              </p>
            </div>
          </div>
        </div>
        <div
          id="descriptionFilm"
          className="absolute top-[0px] w-full h-max bg-black"
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
            <Link to={`/${filmType}/${id}`} className="no-underline">
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
