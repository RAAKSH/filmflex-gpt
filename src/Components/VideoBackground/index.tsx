import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../utils/movieSlice.js";

type VideoBackground = {
  movieId: number;
};

const VideoBackground: React.FC<VideoBackground> = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  const getMovieVideo = async (movieId: number) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await res.json();
    const trailer = data?.results?.filter((video) => video?.type === "Trailer");

    if (trailer.length > 0) {
      dispatch(addTrailerVideo(trailer?.[0]));
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    movieId && getMovieVideo(movieId);
  }, [movieId]);

  return (
    <div className="w-full">
      {trailerVideo?.key && (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
