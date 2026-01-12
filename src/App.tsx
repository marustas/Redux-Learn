import { CreateCustomer } from "./features/customer/CreateCustomer";
import { Customer } from "./features/customer/Customer";
import { BalanceDisplay } from "./features/account/BalanceDisplay";
import { AccountOperations } from "./features/account/AccountOperations";

function App() {
  return (
    <>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </>
  );
}

export default App;
