import axios from "axios";
import { useDispatch } from "react-redux";
import { addVideos } from "../../redux/detailsSlice";
import env from "../../constants/Enviroments";

const useGetVideos = (movieId: string | null, filmType: string | null) => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const {
      data: { results },
    } = await axios.get(
      `${env.API_URL}/${filmType}/${movieId}/videos?language=en-US`,
      {
        params: {
          api_key: env.API_KEY,
        },
      }
    );
    dispatch(addVideos(results));
  };
  return { getVideos };
};

export default useGetVideos;
