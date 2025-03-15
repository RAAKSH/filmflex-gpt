import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { popularMovies } from "../utils/movieSlice.js";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(popularMovies(data?.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;

