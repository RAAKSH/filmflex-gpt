import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    showGPTSearch: false,
    gptMovies:null,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state?.showGPTSearch;
    },
    addGPTMovieResult:(state,action)=>{
        const { movieNames, movieResults } = action.payload;
        state.movieNames = movieNames;
        state.movieResults = movieResults;
        state.gptMovies=action?.payload
    }
  },
});

// eslint-disable-next-line no-unsafe-optional-chaining
export const { toggleGPTSearchView,addGPTMovieResult } = gptSlice?.actions;
export default gptSlice.reducer;
