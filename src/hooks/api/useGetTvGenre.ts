import { addTvGenres } from "../../redux/detailsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axiosInstance from "../../constants/AxiosInstance";

const useGetTvGenre = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const getTvGenre = async () => {
    setIsLoading(true)
    const { 
      data: { genres },
    } = await axiosInstance.get(`/genre/tv/list`, { 
      
    });

    dispatch(addTvGenres(genres));
    setIsLoading(false)
  };
  return { getTvGenre, isLoading };
};

export default useGetTvGenre;
