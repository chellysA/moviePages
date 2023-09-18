import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCredits } from '../../redux/detailsSlice';
import env from '../../constants/Enviroments';

const useGetCredits = (movieId: string | null) => {
  const dispatch = useDispatch();

  const getCredits = async () => {
    const {
      data: { cast },
    } = await axios.get(
      `${env.API_URL}/movie/${movieId}/credits?language=en-US`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );
    dispatch(addCredits(cast));
  };
  return { getCredits };
};

export default useGetCredits;
