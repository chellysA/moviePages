import { addGenres } from '../../redux/moviesSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetGenre = () => {
  const dispatch = useDispatch();
  const getGenre = async () => {
    const {
      data: { genres },
    } = await axios.get(`${API_URL}/genre/movie/list?language=en`, {
      params: {
        api_key: API_KEY,
      },
    });
    dispatch(addGenres(genres));
  };
  return { getGenre };
};

export default useGetGenre;
