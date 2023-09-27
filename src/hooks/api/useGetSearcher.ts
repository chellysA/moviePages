import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addSearcher } from '../../redux/searcherSlice';
import env from '../../constants/Enviroments';
import { addActualPage, addTotalPages } from '../../redux/pagerSlice';

const useGetSearcher = (
  movieTitle: string | null,
  actualPage?: string | null
) => {
  const dispatch = useDispatch();

  const getSearcher = async () => {
    const {
      data: { results, total_pages, page },
    } = await axios.get(
      `${env.API_URL}/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=${actualPage}`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );
    dispatch(addActualPage(page));
    dispatch(addTotalPages(total_pages));
    dispatch(addSearcher(results));
  };
  return { getSearcher };
};

export default useGetSearcher;
