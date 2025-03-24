import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import movieReducer from "./movieSlice.js";
import gptReducer from "./GPTSlice.js";
import langConfigReducer from "./configSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearch: gptReducer,
    langConfig: langConfigReducer,
  },
});

export default appStore;
