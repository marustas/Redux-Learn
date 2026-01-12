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

type StoreState = ReturnType<typeof store.getState>;
type StoreDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<StoreDispatch>();
export const useAppSelector = useSelector.withTypes<StoreState>();
