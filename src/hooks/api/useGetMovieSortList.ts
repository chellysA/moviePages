import axios from "axios";
import { useDispatch } from "react-redux";
import env from "../../constants/Enviroments";
import { addActualPage, addTotalPages } from "../../redux/pagerSlice";
import { addMovies } from "../../redux/moviesSlice";

const useGetMoviesSortList = (
  sortBy: string | null,
  actualPage?: string | null,
  year?: string | null
) => {
  const dispatch = useDispatch();

  const getMoviesSortList = async () => {
    const {
      data: { results, total_pages, page },
    } = await axios.get(
      `${
        env.API_URL
      }/discover/movie?include_adult=false&include_video=false&language=en-US&page=${actualPage}${
        year
          ? `&primary_release_year=${year}&sort_by=popularity.desc`
          : `&sort_by=${sortBy}`
      }`,
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
  return { getMoviesSortList };
};

export default useGetMoviesSortList;
