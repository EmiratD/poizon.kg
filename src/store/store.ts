import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./slice/github.api";
import  orderList  from "./slice/orderSlice";

const store = configureStore({
  reducer: {
    orderList,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;