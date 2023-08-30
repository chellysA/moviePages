import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetMovies = () => {
  const [movies, setMovies] = useState<any>([]);
  const dispatch = useDispatch();
  const getMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/now_playing?language=en-US&page=3`, {
      params: {
        api_key: API_KEY,
      },
    });
    setMovies(results);
    dispatch(results);
  };

  return { getMovies, movies };
};

export default useGetMovies;
