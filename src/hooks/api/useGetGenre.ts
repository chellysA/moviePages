import { addGenres } from "../../redux/detailsSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import env from "../../constants/Enviroments";

const useGetGenre = (filmType: string) => {
  const dispatch = useDispatch();
  const getGenre = async () => {
    const { 
      data: { genres },
    } = await axios.get(`${env.API_URL}/genre/${filmType}/list?language=en`, { //  TODO crear una instance de axios en la carpeta de constants para no escribir eb todos la key y la base url, lee la documentacion de axios
      params: {
        api_key: env.API_KEY,
      },
    });

    dispatch(addGenres(genres));
  };
  return { getGenre };
};

export default useGetGenre;
