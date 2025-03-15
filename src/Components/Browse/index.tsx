import useNowPlaying from "../../hooks/useNowPlaying";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRated";
import useUpComingMovies from "../../hooks/useUpComingMovies";
import Header from "../Header";
import PromoContainer from "../PromoContainer";
import SecondaryContainer from "../SeconddaryContainer";

const Browse = () => {
    useNowPlaying();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();
  return (
    <div>
      <Header />
      <PromoContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
