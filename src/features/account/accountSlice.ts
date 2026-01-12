import type { LoanPurpose } from "../../types";

interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: LoanPurpose;
}

const initialAccountState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: null,
};

const accountReducer = (state = initialAccountState, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    default:
      return state;
  }
};

export const deposit = (payload: number) => ({
  type: "account/deposit",
  payload,
});

export const withdraw = (payload: number) => ({
  type: "account/withdraw",
  payload,
});

export const requestLoan = (amount: number, purpose: LoanPurpose) => ({
  type: "account/requestLoan",
  payload: { amount, purpose },
});

export default accountReducer;
