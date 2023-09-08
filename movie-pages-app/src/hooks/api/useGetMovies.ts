import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../redux/moviesSlice';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/now_playing?language=en-US&page=1`, {
      params: {
        api_key: API_KEY,
      },
    });
    dispatch(addMovies(results));
  };

  return { getMovies };
};

export default useGetMovies;
