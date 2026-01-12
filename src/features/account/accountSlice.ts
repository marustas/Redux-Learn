import type { Action, LoanPurpose } from "../../types";

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

type AccountActionType =
  | "account/deposit"
  | "account/withdraw"
  | "account/requestLoan";

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

type AccountAction = Action<AccountActionType, number>;

const accountReducer = (state = initialAccountState, action: AccountAction) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    default:
      return state;
  }
};

export default accountReducer;
