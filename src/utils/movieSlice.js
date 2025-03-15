import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailerVideo:null,
    popularMovies:null,
    topRatedMovies:null,
    upComingMovies:null
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailerVideo:(state,action)=>{
        state.trailerVideo = action.payload;
    },
    popularMovies:(state,action)=>{
        state.popularMovies = action.payload;
    },
    topRatedMovies:(state,action)=>{
      state.topRatedMovies = action.payload;
  },
  upComingMovies:(state,action)=>{
    state.upComingMovies = action.payload;
},
  },
});

export const { addNowPlaying,addTrailerVideo,popularMovies,topRatedMovies,upComingMovies } = movieSlice?.actions;

export default movieSlice.reducer;
