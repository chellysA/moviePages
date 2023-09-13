import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  addMovies,
  addActualPage,
  addTotalPages,
} from '../../redux/moviesSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetMovies = () => {
  const dispatch = useDispatch();
  const { actualPage } = useSelector<any, any>((state) => state.movies);

  const getMovies = async () => {
    const {
      data: { results, total_pages, page },
    } = await axios.get(
      `${API_URL}/movie/now_playing?language=en-US&page=${actualPage}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    dispatch(addActualPage(page));
    dispatch(addTotalPages(total_pages));
    dispatch(addMovies(results));
  };

  return { getMovies };
};

export default useGetMovies;
