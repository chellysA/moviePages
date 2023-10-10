import { addMovieGenres } from "../../redux/detailsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axiosInstance from "../../constants/AxiosInstance";

const useGetMovieGenre = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const getMovieGenre = async () => {
    setIsLoading(true)
    const { 
      data: { genres },
    } = await axiosInstance.get(`/genre/movie/list?language=en`, 
    );
    dispatch(addMovieGenres(genres));
    setIsLoading(false)
  };
  return { getMovieGenre, isLoading };
};

export default useGetMovieGenre;
