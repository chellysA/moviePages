import { Link } from 'react-router-dom';
import { IFilmPosterProps } from '../FilmPosters';
import Button from '../Button';
import { BsFillPlayFill } from 'react-icons/bs';

const MovieDescription = ({
  original_title,
  overview,
  vote_average,
  release_date,
  genre_ids,
  id,
}: IFilmPosterProps) => {
  return (
    <div className="px-8">
      <h1 className="text-gray-100 ">{original_title}</h1>
      <div className="flex text-gray-100 text-[13px]">
        <p className="pr-2">IMDB: {vote_average}</p>
        <p className="pr-2">Date: {release_date}</p>
        <p className="pr-2">Genre: {genre_ids} </p>
      </div>
      <p className="text-gray-50 w-3/4 mb-4">{overview}</p>
      <Link to={`/movie/${id}`} className="no-underline flex w-max">
        <Button
          icon={<BsFillPlayFill className="h-[30px] w-[30px]" />}
          label="Whatch now"
          border={true}
        />
      </Link>
    </div>
  );
};

export default MovieDescription;
