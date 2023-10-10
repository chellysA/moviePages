import { useDispatch } from "react-redux";
import { addMovies } from "../../redux/moviesSlice";
import { addActualPage, addTotalPages } from "../../redux/pagerSlice";
import { useState } from "react";
import axiosInstance from "../../constants/AxiosInstance";

const useGetMovies = (actualPage: string | null) => {
const dispatch = useDispatch();
const [isLoading, setIsLoading] = useState(false)

const getMovies = async () => {
  setIsLoading(true)
    const {
      data: { results, total_pages, page },
    } = await axiosInstance.get(
      `/trending/movie/day?language=en-US&page=${actualPage}`,
    );
    dispatch(addMovies(results));
    dispatch(addTotalPages(total_pages > 500 ? 500 : total_pages));
    dispatch(addActualPage(page));
    setIsLoading(false)
  };

  return { getMovies, isLoading };
};

export default useGetMovies;
