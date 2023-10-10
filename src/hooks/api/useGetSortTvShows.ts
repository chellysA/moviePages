import { useDispatch } from "react-redux";
import { addActualPage, addTotalPages } from "../../redux/pagerSlice";
import { addTvShows } from "../../redux/tvShowsSlice";
import axiosInstance from "../../constants/AxiosInstance";

const useGetSortTvShows = (
  sortBy: string | null,
  actualPage?: string | null,
  year?: string | null
) => {
  const dispatch = useDispatch();

  const getSortTvShows = async () => {
    const {
      data: { results, total_pages, page },
    } = await axiosInstance.get(
      `/discover/tv?${
        year
          ? `first_air_date_year=${year}&include_adult=false&include_null_first_air_dates=false&page=${actualPage}&sort_by=popularity.desc`
          : `&include_adult=false&include_null_first_air_dates=false&page=${actualPage}&sort_by=${sortBy}`
      }`
    );

    dispatch(addTvShows(results));
    dispatch(addTotalPages(total_pages > 500 ? 500 : total_pages));
    dispatch(addActualPage(page));
  };
  return { getSortTvShows };
};

export default useGetSortTvShows;
