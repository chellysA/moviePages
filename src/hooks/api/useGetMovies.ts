import axios from 'axios';
import { useDispatch } from 'react-redux';
import env from '../../constants/Enviroments';
import { addMovies } from '../../redux/moviesSlice';
import { addActualPage, addTotalPages } from '../../redux/pagerSlice';

const useGetMovies = (actualPage: string | null) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const {
      data: { results, total_pages, page },
    } = await axios.get(
      `${env.API_URL}/movie/popular?language=en-US&page=${actualPage}`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );
    dispatch(addMovies(results));
    dispatch(addTotalPages(total_pages > 500 ? 500 : total_pages));
    dispatch(addActualPage(page));
  };
  return { getMovies };
};

export default useGetMovies;
