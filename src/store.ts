import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();
