import { useDispatch } from 'react-redux';
import { addSearcher } from '../../redux/searcherSlice';
import { addActualPage, addTotalPages } from '../../redux/pagerSlice';
import axiosInstance from '../../constants/AxiosInstance';

const useGetSearcher = (
  movieTitle: string | null,
  actualPage?: string | null
) => {
  const dispatch = useDispatch();

  const getSearcher = async () => {
    const {
      data: { results, total_pages, page },
    } = await axiosInstance.get(
      `/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=${actualPage}`,
    );
    dispatch(addActualPage(page));
    dispatch(addTotalPages(total_pages));
    dispatch(addSearcher(results));
  };
  return { getSearcher };
};

export default useGetSearcher;
