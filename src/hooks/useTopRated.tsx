import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { setTopRatedMovies } from "../utils/movieSlice.js";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store?.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(setTopRatedMovies(data?.results));
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
