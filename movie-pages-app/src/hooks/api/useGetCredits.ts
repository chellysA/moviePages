import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCredits } from '../../redux/moviesSlice';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetCredits = (movieId: string | null) => {
  const dispatch = useDispatch();

  const getCredits = async () => {
    const {
      data: { cast },
    } = await axios.get(`${API_URL}/movie/${movieId}/credits?language=en-US`, {
      params: {
        api_key: API_KEY,
      },
    });
    dispatch(addCredits(cast));
  };
  return { getCredits };
};

export default useGetCredits;
