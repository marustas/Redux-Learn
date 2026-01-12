import { configureStore } from "@reduxjs/toolkit";
import type { LoanPurpose } from "./types";

interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: LoanPurpose;
}

interface CustomerState {
  fullName: string;
  nationalID: number;
  createdAt: Date | null;
}

const initialAccountState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: null,
};

const initialCustomerState: CustomerState = {
  fullName: "",
  nationalID: 0,
  createdAt: null,
};

const reducer = (state = initialAccountState, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    default:
      return state;
  }
};

const customerReducer = (state = initialCustomerState, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return { ...state, ...action.payload };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};

const createCustomer = (fullName: string, nationalID: number) => ({
  type: "customer/createCustomer",
  payload: { fullName, nationalID, createdAt: new Date().toISOString() },
});

const updateName = (fullName: string) => ({
  type: "customer/updateName",
  payload: { fullName },
});

const deposit = (payload: number) => ({
  type: "account/deposit",
  payload,
});

const withdraw = (payload: number) => ({
  type: "account/withdraw",
  payload,
});

const requestLoan = (amount: number, purpose: LoanPurpose) => ({
  type: "account/requestLoan",
  payload: { amount, purpose },
});

export const store = configureStore({
  reducer,
});
