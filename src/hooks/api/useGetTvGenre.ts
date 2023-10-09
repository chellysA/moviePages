import { addTvGenres } from "../../redux/detailsSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import env from "../../constants/Enviroments";
import { useState } from "react";

const useGetTvGenre = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const getTvGenre = async () => {
    setIsLoading(true)
    const { 
      data: { genres },
    } = await axios.get(`${env.API_URL}/genre/tv/list?language=en`, { //  TODO crear una instance de axios en la carpeta de constants para no escribir eb todos la key y la base url, lee la documentacion de axios
      params: {
        api_key: env.API_KEY,
      },
    });

    dispatch(addTvGenres(genres));
    setIsLoading(false)
  };
  return { getTvGenre, isLoading };
};

export default useGetTvGenre;
