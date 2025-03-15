import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-55 pl-12 relative z-50">
          <MovieList title={"Now Playing"} movie={movies?.nowPlaying} />
          <MovieList title={"Popular"} movie={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movie={movies?.topRatedMovies} />
          <MovieList title={"Up Coming"} movie={movies?.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
