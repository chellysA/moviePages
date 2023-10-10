import { useDispatch } from "react-redux";
import { addActualPage, addTotalPages } from "../../redux/pagerSlice";
import { addMovies } from "../../redux/moviesSlice";
import axiosInstance from "../../constants/AxiosInstance";

const useGetMoviesSortList = (
  sortBy: string | null,
  actualPage?: string | null,
  year?: string | null
) => {
  const dispatch = useDispatch();
  const getMoviesSortList = async () => {
    const {
      data: { results, total_pages, page },
    } = await axiosInstance.get(
      `/discover/movie?include_adult=false&include_video=false&page=${actualPage}${
        year
          ? `&primary_release_year=${year}&sort_by=popularity.desc`
          : `&sort_by=${sortBy}`
      }`,
    );

    dispatch(addMovies(results));
    dispatch(addTotalPages(total_pages > 500 ? 500 : total_pages));
    dispatch(addActualPage(page));
  };
  return { getMoviesSortList };
};

export default useGetMoviesSortList;
