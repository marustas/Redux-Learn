import type { Action } from "../../types";

interface CustomerState {
  fullName: string;
  nationalID: string;
  createdAt: Date | null;
}

const initialCustomerState: CustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: null,
};

type CustomerActionType = "customer/createCustomer" | "customer/updateName";

export const createCustomer = (
  fullName: string,
  nationalID: string
): CustomerAction => ({
  type: "customer/createCustomer",
  payload: { fullName, nationalID, createdAt: new Date().toISOString() },
});

export const updateName = (fullName: string) => ({
  type: "customer/updateName",
  payload: { fullName },
});

type CustomerAction = Action<
  CustomerActionType,
  | { fullName: string }
  | { fullName: string; nationalID: string; createdAt: string | null }
>;

const customerReducer = (
  state = initialCustomerState,
  action: CustomerAction
) => {
  switch (action.type) {
    case "customer/createCustomer":
      return { ...state, ...action.payload };
    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
};

export default customerReducer;
