import { useAppSelector } from "../../store";

export const Customer = () => {
  const customerName = useAppSelector((state) => state.customer.fullName);

  return <h2>Hello, {customerName}</h2>;
};
