import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../../redux/nowPlayingSlice';
import { addActualPage, addTotalPages } from '../../redux/pagerSlice';
import { useState } from 'react';
import axiosInstance from '../../constants/AxiosInstance';

const useGetNowPlaying = (actualPage: string | null) => {
  const dispatch = useDispatch();
const [isLoading, setIsLoading]= useState(false)
  const getNowPlaying = async () => {
    setIsLoading(true)
    const {
      data: { results, total_pages, page },
    } = await axiosInstance.get(
      `/movie/now_playing?&page=${actualPage}`,
    );
    dispatch(addActualPage(page));
    dispatch(addTotalPages(total_pages));
    dispatch(addNowPlaying(results));
    setIsLoading(false)
  };

  return { getNowPlaying, isLoading };
};

export default useGetNowPlaying;
