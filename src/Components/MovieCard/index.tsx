import React, { useEffect, useState } from "react";
import { MOVIE_IMAGE_PATH } from "../../utils/constants.js";
import { API_OPTIONS } from "../../utils/constants.js";

type MovieCardProps = {
  posterPath: string;
  movie: Record<string, string | number>;
};

const MovieCard: React.FC<MovieCardProps> = ({ posterPath, movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [trailer, setTrailer] = useState([]);

  if(!posterPath) return null;

  const getMovieVideo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie?.id}/videos`,
      API_OPTIONS
    );
    const data = await res.json();
    const trailer = data?.results?.filter((video) => video?.type === "Trailer");
    setTrailer(trailer?.[0]);
  };

  useEffect(() => {
    if (isHovered) {
      getMovieVideo(movie?.movieId);
    }
  }, [isHovered, movie?.movieId]);

  return (
    <div
      className="relative w-48 pr-4 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative transition-all duration-300 ease-in-out ${
          isHovered ? "scale-150 z-50" : "scale-100"
        }`}
      >
        {!isHovered ? (
          <img
            src={MOVIE_IMAGE_PATH + posterPath}
            className="w-full rounded-md transition-transform duration-300 group-hover:scale-110"
            alt="Movie Poster"
          />
        ) : (
          <div className="absolute top-0 left-0 w-64 h-64 bg-black bg-opacity-90 p-2 rounded-lg shadow-lg">
            {trailer?.key && isHovered ? (
              <iframe
                className="w-full h-32 rounded-md"
                src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0`}
                title="Movie Trailer"
                allow="autoplay; encrypted-media"
              ></iframe>
            ) : (
              <p className="text-white text-sm">No Trailer Available</p>
            )}

            <div className="text-white text-sm">
              <p className="font-semibold">
                Language: {movie?.original_language}
              </p>
              <p>Votes: {movie?.vote_count}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
