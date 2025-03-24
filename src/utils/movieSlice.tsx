import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface MovieState {
  nowPlaying: unknown | null; // Replace `any` with the actual type if available
  trailerVideo: unknown | null;
  popularMovies: unknown[] | null;
  topRatedMovies: unknown[] | null;
  upComingMovies: unknown[] | null;
}
const initialState: MovieState = {
  nowPlaying: null,
  trailerVideo: null,
  popularMovies: null,
  topRatedMovies: null,
  upComingMovies: null,
};
const movieSlice= createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlaying: (state, action:PayloadAction< null>) => {
      state.nowPlaying = action.payload;
    },
    addTrailerVideo: (state, action:PayloadAction< null>) => {
      state.trailerVideo = action.payload;
    },
    setpopularMovies: (state, action:PayloadAction< null>) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action:PayloadAction< null>) => {
      state.topRatedMovies = action.payload;
    },
    setUpComingMovies: (state, action:PayloadAction< null>) => {
      state.upComingMovies = action.payload;
    },
  },
});

export const {
  addNowPlaying,
  addTrailerVideo,
  setpopularMovies,
  setTopRatedMovies,
  setUpComingMovies,
} = movieSlice.actions;



export default movieSlice.reducer;
