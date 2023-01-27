import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./api/github.api";

const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;