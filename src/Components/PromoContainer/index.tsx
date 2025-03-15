import { useSelector } from "react-redux";
import VideoBackground from "../VideoBackground";
import VideoTitle from "../VideoTitle";

const PromoContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlaying);

  const trendingMovie = movie?.[0];

  return (
    <div>
      <VideoTitle
        title={trendingMovie?.title}
        overview={trendingMovie?.overview}
      />
      <VideoBackground movieId={trendingMovie?.id} />
    </div>
  );
};

export default PromoContainer;
