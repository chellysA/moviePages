import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../../redux/nowPlayingSlice';
import { addActualPage, addTotalPages } from '../../redux/pagerSlice';
import env from '../../constants/Enviroments';
import { useState } from 'react';

const useGetNowPlaying = (actualPage: string | null) => {
  const dispatch = useDispatch();
const [isLoading, setIsLoading]= useState(false)
  const getNowPlaying = async () => {
    setIsLoading(true)
    const {
      data: { results, total_pages, page },
    } = await axios.get(
      `${env.API_URL}/movie/now_playing?language=en-US&page=${actualPage}`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );
    dispatch(addActualPage(page));
    dispatch(addTotalPages(total_pages));
    dispatch(addNowPlaying(results));
    setIsLoading(false)
  };

  return { getNowPlaying, isLoading };
};

export default useGetNowPlaying;
