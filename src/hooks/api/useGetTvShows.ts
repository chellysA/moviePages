import { useDispatch } from "react-redux";
import { addTvShows } from "../../redux/tvShowsSlice";
import { addActualPage, addTotalPages } from "../../redux/pagerSlice";
import axiosInstance from "../../constants/AxiosInstance";

const useGetTvShows = (actualPage: string) => {
  const dispatch = useDispatch();

  const getTvShows = async () => {

    const {
      data: { results, total_pages, page },
    } = await axiosInstance.get(
      `/tv/popular?language=en-US&page=${actualPage}`,
    );
    dispatch(addTvShows(results));
    dispatch(addTotalPages(total_pages > 500 ? 500 : total_pages));
    dispatch(addActualPage(page));
  };
  return { getTvShows };
};

export default useGetTvShows;
