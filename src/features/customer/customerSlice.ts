interface CustomerState {
  fullName: string;
  nationalID: number;
  createdAt: Date | null;
}

const initialCustomerState: CustomerState = {
  fullName: "",
  nationalID: 0,
  createdAt: null,
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

export const createCustomer = (fullName: string, nationalID: number) => ({
  type: "customer/createCustomer",
  payload: { fullName, nationalID, createdAt: new Date().toISOString() },
});

export const updateName = (fullName: string) => ({
  type: "customer/updateName",
  payload: { fullName },
});

export default customerReducer;
