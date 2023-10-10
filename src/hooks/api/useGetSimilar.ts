import { addSimilar } from "../../redux/detailsSlice";
import { useDispatch } from "react-redux";
import axiosInstance from "../../constants/AxiosInstance";

const useGetSimilar = (movieId: string | null, filmType: string | null) => {
  const dispatch = useDispatch();

  const getSimilar = async () => {
    const {
      data: { results },
    } = await axiosInstance.get(
      `/${filmType}/${movieId}/similar?&page=1`,
    );
    dispatch(addSimilar(results));
  };

  return { getSimilar };
};

export default useGetSimilar;
