import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "../Button";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useIsMobile } from "../../hooks/useIsMobile";
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
  const mobile = useIsMobile();

  return (
    <>
      <div
        id="filmPoster"
        className={`relative w-[40%] h-[60%] md:w-[200px] md:h-[300px] mb-[10%] md:mb-[120px] mx-2 md:mx-6`}
      >
        <div id="nohover" className="">
          <img
            src={poster_path}
            alt=""
            className="rounded-md min-h-[200px] w-full max-h-[300px]"
          ></img>
          {mobile && (
            <Link
              to={`/${filmType}/${id}`}
              className="no-underline absolute bottom-[10px] left-[25px] bg-gray-60 rounded-[50px]"
            >
              <Button
                icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
                label="Whatch now"
                border={true}
              />
            </Link>
          )}
          <p className="text-gray-100 truncate py-2 m-0">
            {original_title || name}
          </p>
          <div className="flex justify-around">
            <p className="text-gray-50 text-[12px] p-0 md:text-[15px]">
              {release_date || first_air_date}
            </p>
            <div className="w-[5px] h-[5px] bg-gray-100 rounded-md mt-2 mx-1"></div>
            <p className="text-[12px] md:text-[15px] p-0 truncate">
              {genre_ids}
            </p>
            <div>
              <p className="text-gray-50 text-[13px] border px-1 rounded-md ml-2">
                {filmType === "tv_shows" ? "TvShow" : "Movie"}
              </p>
            </div>
          </div>
        </div>
        {!mobile && (
          <div
            id="descriptionFilm"
            className="absolute top-[0px] w-full h-[385px] bg-black"
          >
            <img
              src={backdrop_path}
              alt=""
              className="rounded-md mb-2 h-[105px]"
            ></img>

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
        )}
      </div>
    </>
  );
};

export default FilmPosters;
