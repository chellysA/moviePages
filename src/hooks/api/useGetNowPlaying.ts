import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../../redux/nowPlayingSlice';
import { addActualPage, addTotalPages } from '../../redux/pagerSlice';
import env from '../../constants/Enviroments';

const useGetNowPlaying = (actualPage: string | null) => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    const {
      data: { results, total_pages, page },
    } = await axios.get(
      `${env.API_URL}/movie/now_playing?language=en-US&page=${actualPage}`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );
    dispatch(addActualPage(page));
    dispatch(addTotalPages(total_pages));
    dispatch(addNowPlaying(results));
  };

  return { getNowPlaying };
};

export default useGetNowPlaying;
