import { useDispatch } from "react-redux";
import { addVideos } from "../../redux/detailsSlice";
import axiosInstance from "../../constants/AxiosInstance";

const useGetVideos = (movieId: string | null, filmType: string | null) => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const {
      data: { results },
    } = await axiosInstance.get(
      `/${filmType}/${movieId}/videos`,
    );
    dispatch(addVideos(results));
  };
  return { getVideos };
};

export default useGetVideos;
