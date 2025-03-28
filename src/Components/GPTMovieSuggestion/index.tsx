import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store?.gptSearch);

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white opacity-80">
      <div>
        {movieNames?.map((movieNames,index) => (
          <MovieList
            key={movieNames}
            title={movieNames}
            movie={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
