import axios from "axios";
import { useDispatch } from "react-redux";
import env from "../../constants/Enviroments";
import { addActualPage, addTotalPages } from "../../redux/pagerSlice";
import { addTvShows } from "../../redux/tvShowsSlice";

const useGetSortTvShows = (
  sortBy: string | null,
  actualPage?: string | null
) => {
  const dispatch = useDispatch();

  const getSortTvShows = async () => {
    const {
      data: { results, total_pages, page },
    } = await axios.get(
      `${env.API_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${actualPage}&sort_by=${sortBy}`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );

    dispatch(addTvShows(results));
    dispatch(addTotalPages(total_pages > 500 ? 500 : total_pages));
    dispatch(addActualPage(page));
  };
  return { getSortTvShows };
};

export default useGetSortTvShows;
