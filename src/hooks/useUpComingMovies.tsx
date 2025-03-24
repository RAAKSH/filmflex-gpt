import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { setUpComingMovies } from "../utils/movieSlice.js";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies=useSelector(store=>store.movies.upComingMovies)
  const getUpComingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(setUpComingMovies(data?.results));
  };

  useEffect(() => {
   // eslint-disable-next-line @typescript-eslint/no-unused-expressions
   !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;

