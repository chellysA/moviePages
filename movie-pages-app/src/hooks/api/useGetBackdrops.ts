import axios from 'axios';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { addBackdrops } from '../../redux/moviesSlice';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetBackdrops = (movieId: string | null) => {
  const dispatch = useDispatch();

  const getBackdrops = async () => {
    const {
      data: { backdrops },
    } = await axios.get(`${API_URL}/movie/${movieId}/images`, {
      params: {
        api_key: API_KEY,
      },
    });
    dispatch(addBackdrops(backdrops));
  };
  return { getBackdrops };
};

export default useGetBackdrops;
