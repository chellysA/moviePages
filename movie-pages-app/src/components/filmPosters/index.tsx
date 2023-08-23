import React, { useState } from 'react';
import FilmPostersImg from '../../constants/FilmPostersImg';
import { AiFillStar } from 'react-icons/ai';
import Button from '../button';
import { BsFillPlayFill } from 'react-icons/bs';

const FilmPosters: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start">
      {FilmPostersImg.map(
        (
          {
            src,
            alt,
            title,
            year,
            filmDuration,
            filmType,
            quality,
            description,
            country,
            genre,
            rating,
          },
          index
        ) => {
          const [showMovieDescrip, setShowMovieDescrip] = useState(false);
          return (
            <div
              key={index}
              className="relative w-[200px] h-[300px] mb-[98px] mx-2"
              onMouseEnter={() => setShowMovieDescrip(true)}
              onMouseLeave={() => setShowMovieDescrip(false)}
            >
              <div className="absolute right-[10px] top-[10px] bg-white rounded-sm w-[28px] h-[18px]">
                <p className="text-[12px] text-black text-center">{quality}</p>
              </div>

              {showMovieDescrip && (
                <div className="absolute bottom-[-65px] w-full h-5/6 bg-black">
                  <p className="text-gray-100 text-[14px] h-[150px] pb-1 overflow-hidden">
                    {description}
                  </p>
                  <div>
                    <p className="text-[13px] m-0">Country: {country}</p>
                    <p className="text-[13px] m-0">Genre: {genre}</p>
                  </div>
                  <div className="flex justify-start mb-1">
                    <AiFillStar className="text-principal-200 mb-1" />
                    <p className="text-[13px] m-0">{rating}</p>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
                      label="Whatch now"
                      border={true}
                    />
                  </div>
                </div>
              )}

              <img
                src={`https://picsum.photos/id/${index}/200/300`}
                alt={alt}
                className="relative rounded-md hover:w-[50px] hover:h-[50px] hover:bg-principal-200 hover:rounded-full"
              ></img>

              <p className="text-gray-100 truncate py-2 m-0">{title}</p>
              <div className="flex justify-around">
                <p className="text-gray-50 text-[15px]">{year}</p>
                <div className="w-[5px] h-[5px] bg-gray-100 rounded-md mt-2"></div>
                <p className="text-gray-50 text-[15px]">{filmDuration}</p>{' '}
                <div>
                  <p className="text-gray-50 text-[13px] border px-1 rounded-md ml-4">
                    {filmType}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default FilmPosters;
