import { useDispatch } from "react-redux";
import { addCredits } from "../../redux/detailsSlice";
import axiosInstance from "../../constants/AxiosInstance";

const useGetCredits = (movieId: string | null, filmType: string | null) => {
  const dispatch = useDispatch();

  const getCredits = async () => {
    const {
      data: { cast },
    } = await axiosInstance.get(
      `/${filmType}/${movieId}/credits`
    );
    dispatch(addCredits(cast));
  };
  return { getCredits };
};

export default useGetCredits;
