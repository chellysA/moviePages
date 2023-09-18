import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addDetails } from '../../redux/moviesSlice';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetDetails = (movieId: string | null) => {
  const dispatch = useDispatch();

  const getDetails = async () => {
    const data = await axios.get(`${API_URL}/movie/${movieId}?language=en-US`, {
      params: {
        api_key: API_KEY,
      },
    });
    dispatch(addDetails(data.data));
  };
  return { getDetails };
};

export default useGetDetails;
