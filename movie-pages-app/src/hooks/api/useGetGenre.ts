import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b97a531d5627d04bf68076ad1254c21';

const useGetGenre = () => {
  const [genre, setGenre] = useState<any>([]);

  const getGenre = async () => {
    const { data } = await axios.get(
      `${API_URL}/genre/movie/list?language=en`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    setGenre(data);
  };

  return { getGenre, genre };
};

export default useGetGenre;
