import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  fullName: string;
  nationalID: string;
  createdAt: Date | null;
}

const initialState: CustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName: string, nationalID: string) {
        return {
          payload: null,
          meta: { fullName, nationalID, createdAt: new Date().toISOString() },
          error: null,
        };
      },
      reducer(state, action) {
        state.fullName = action.meta.fullName;
        state.nationalID = action.meta.nationalID;
        state.createdAt = action.meta.createdAt;
      },
    },
    updateName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;
