import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice.js";
import { useEffect } from "react";


const useNowPlaying = () => {
  const dispatch = useDispatch();
  const  nowPlaying  = useSelector(store => store?.movies?.nowPlaying);
  const getNowPlaying = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(addNowPlaying(data?.results));
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !nowPlaying && getNowPlaying();
  }, []);
};

export default useNowPlaying;
