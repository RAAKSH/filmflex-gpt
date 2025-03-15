import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice.js";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(addNowPlaying(data?.results));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlaying;

