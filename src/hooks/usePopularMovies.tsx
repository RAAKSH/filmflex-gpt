import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { setpopularMovies } from "../utils/movieSlice.js";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies=useSelector(store=>store.movies.popularMovies)
 
  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const data = await res.json();
    console.log("data",data)

    dispatch(setpopularMovies(data?.results));
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;

