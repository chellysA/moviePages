import { useDispatch } from 'react-redux';
import { addMovies } from '../../redux/moviesSlice';
import { addActualPage, addTotalPages } from '../../redux/pagerSlice';
import { useState } from 'react';
import axiosInstance from '../../constants/AxiosInstance';

const useGetUpComing = (actualPage: string | null) => {
  const dispatch = useDispatch();
const [isLoading, setIsLoading]= useState(false)

  const getUpComing = async () => {
    setIsLoading(true)
    const {
      data: { results, total_pages, page },
    } = await axiosInstance.get(
      `/movie/upcoming?&page=${actualPage}`,
    );
    dispatch(addActualPage(page));
    dispatch(addTotalPages(total_pages));
    dispatch(addMovies(results));
    setIsLoading(false)
  };

  return { getUpComing, isLoading };
};

export default useGetUpComing;
