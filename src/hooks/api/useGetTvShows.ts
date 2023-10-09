import axios from "axios";
import { useDispatch } from "react-redux";
import env from "../../constants/Enviroments";
import { addTvShows } from "../../redux/tvShowsSlice";
import { addActualPage, addTotalPages } from "../../redux/pagerSlice";

const useGetTvShows = (actualPage: string) => {
  const dispatch = useDispatch();

  const getTvShows = async () => {

    const {
      data: { results, total_pages, page },
    } = await axios.get(
      `${env.API_URL}/tv/popular?language=en-US&page=${actualPage}`,
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
  return { getTvShows };
};

export default useGetTvShows;
