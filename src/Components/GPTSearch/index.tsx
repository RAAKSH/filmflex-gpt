import GPTSearchBar from "../GPTSearchBar";
import GPTMovieSuggestions from "../GPTMovieSuggestion";
import { BACK_DROP } from "../../utils/constants.js";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BACK_DROP} alt="Backdrop" />
      </div>
      <div className="pt-[25%] md:p-0">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
