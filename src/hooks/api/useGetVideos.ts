import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addVideos } from '../../redux/moviesSlice';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetVideos = (movieId: string | null) => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/${movieId}/videos?language=en-US`, {
      params: {
        api_key: API_KEY,
      },
    });
    dispatch(addVideos(results));
  };
  return { getVideos };
};

export default useGetVideos;
