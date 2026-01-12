import type { LoanPurpose } from "../../types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: LoanPurpose;
}

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action: PayloadAction<number>) {
      state.balance += action.payload;
    },
    withdraw(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(payload: number, purpose: LoanPurpose) {
        return {
          payload,
          meta: {
            purpose,
          },
          error: null,
        };
      },
      reducer(state, action) {
        if (state.loan > 0) {
          return;
        }

        state.loan += action.payload.amount;
        state.loanPurpose = action.meta.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
      state.loan -= action.payload;
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;
