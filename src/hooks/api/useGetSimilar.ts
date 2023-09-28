import { addSimilar } from "../../redux/detailsSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import env from "../../constants/Enviroments";

const useGetSimilar = (movieId: string | null, filmType: string | null) => {
  const dispatch = useDispatch();

  const getSimilar = async () => {
    const {
      data: { results },
    } = await axios.get(
      `${env.API_URL}/${filmType}/${movieId}/similar?language=en-US&page=1`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );
    dispatch(addSimilar(results));
  };

  return { getSimilar };
};

export default useGetSimilar;
