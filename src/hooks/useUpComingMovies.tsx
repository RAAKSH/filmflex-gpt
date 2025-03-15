import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { upComingMovies } from "../utils/movieSlice.js";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(upComingMovies(data?.results));
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;

