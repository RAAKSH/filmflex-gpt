import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { topRatedMovies } from "../utils/movieSlice.js";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(topRatedMovies(data?.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;

