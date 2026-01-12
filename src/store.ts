import { combineReducers, createStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export const store = createStore(rootReducer);

type StoreState = ReturnType<typeof store.getState>;
type StoreDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<StoreDispatch>();
export const useAppSelector = useSelector.withTypes<StoreState>();
