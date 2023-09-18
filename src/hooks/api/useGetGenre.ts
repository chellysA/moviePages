import { addGenres } from '../../redux/detailsSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import env from '../../constants/Enviroments';

const useGetGenre = () => {
  const dispatch = useDispatch();
  const getGenre = async () => {
    const {
      data: { genres },
    } = await axios.get(`${env.API_URL}/genre/movie/list?language=en`, {
      params: {
        api_key: env.API_KEY,
      },
    });
    dispatch(addGenres(genres));
  };
  return { getGenre };
};

export default useGetGenre;
