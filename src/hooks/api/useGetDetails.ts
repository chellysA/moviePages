import { useDispatch } from "react-redux";
import { addDetails } from "../../redux/detailsSlice";
import axiosInstance from "../../constants/AxiosInstance";

const useGetDetails = (movieId: string | null, filmType: string | null) => {
  const dispatch = useDispatch();

  const getDetails = async () => {
    const data = await axiosInstance.get(
      `/${filmType}/${movieId}?language=en-US`,
    );
    dispatch(addDetails(data.data));
  };
  return { getDetails };
};

export default useGetDetails;
