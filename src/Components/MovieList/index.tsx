import React from "react";
import MovieCard from "../MovieCard";

type MovieListProps = {
  title: string;
  movie: Record<string, string | number>[];
};
const MovieList: React.FC<MovieListProps> = ({ title, movie }) => {
  return (
    <div className="md:px-10 ">
      <h1 className="text-bold text-2xl text-white py-4">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movie?.map((item) => (
            <MovieCard
              key={item?.id}
              posterPath={item?.poster_path}
              movie={item}
            />
          ))}
        </div>
        ;
      </div>
    </div>
  );
};

export default MovieList;
