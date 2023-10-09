import axios from "axios";
import { useDispatch } from "react-redux";
import env from "../../constants/Enviroments";
import { addMovies } from "../../redux/moviesSlice";
import { addActualPage, addTotalPages } from "../../redux/pagerSlice";
import { useState } from "react";

const useGetMovies = (actualPage: string | null) => {
const dispatch = useDispatch();
const [isLoading, setIsLoading] = useState(false)

const getMovies = async () => {
  setIsLoading(true)
    const {
      data: { results, total_pages, page },
    } = await axios.get(
      `${env.API_URL}/trending/movie/day?language=en-US&page=${actualPage}`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );
    dispatch(addMovies(results));
    dispatch(addTotalPages(total_pages > 500 ? 500 : total_pages));
    dispatch(addActualPage(page));
    setIsLoading(false)
  };

  return { getMovies, isLoading };
};

export default useGetMovies;
