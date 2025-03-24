import { useSelector } from "react-redux";
import useNowPlaying from "../../hooks/useNowPlaying";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRated";
import useUpComingMovies from "../../hooks/useUpComingMovies";
import GPTSearch from "../GPTSearch";
import Header from "../Header";
import PromoContainer from "../PromoContainer";
import SecondaryContainer from "../SeconddaryContainer";

const Browse = () => {
  const showGPT = useSelector((store) => store?.gptSearch?.showGPTSearch);

  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {showGPT ? (
        <GPTSearch />
      ) : (
        <>
          <PromoContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
