import { useDispatch } from 'react-redux';
import { addMovies } from '../../redux/moviesSlice';
import { addActualPage, addTotalPages } from '../../redux/pagerSlice';
import axiosInstance from '../../constants/AxiosInstance';

const useGetUpComing = (actualPage: string | null) => {
  const dispatch = useDispatch();

  const getUpComing = async () => {
    const {
      data: { results, total_pages, page },
    } = await axiosInstance.get(
      `/movie/upcoming?&page=${actualPage}`,
    );
    dispatch(addActualPage(page));
    dispatch(addTotalPages(total_pages));
    dispatch(addMovies(results));
  };

  return { getUpComing };
};

export default useGetUpComing;
