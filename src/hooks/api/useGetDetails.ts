import axios from "axios";
import { useDispatch } from "react-redux";
import { addDetails } from "../../redux/detailsSlice";
import env from "../../constants/Enviroments";

const useGetDetails = (movieId: string | null, filmType: string | null) => {
  const dispatch = useDispatch();

  const getDetails = async () => {
    const data = await axios.get(
      `${env.API_URL}/${filmType}/${movieId}?language=en-US`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );
    dispatch(addDetails(data.data));
  };
  return { getDetails };
};

export default useGetDetails;
