import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from './GPTSlice';
import langConfigReducer from "./configSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearch: gptReducer,
    langConfig:langConfigReducer
  },
});

export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
