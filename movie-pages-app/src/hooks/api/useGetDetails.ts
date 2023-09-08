{
  /*import axios from 'axios';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { addDetails } from '../../redux/moviesSlice';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetDetails = () => {
  const dispatch = useDispatch();
  const { id } = useSelector<any, any>((state) => state.movies);
  const getDetails = async () => {
    const {
      data: { details },
    } = await axios.get(`${API_URL}/movie/${id && id[0]}?language=en-US`, {
      params: {
        api_key: API_KEY,
      },
    });

    dispatch(addDetails(details));
  };
  return { getDetails };
};

export default useGetDetails;*/
}
