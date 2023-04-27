import { BudgetApp, Expenses, Form } from "./components";
import { AppWrapper } from "./UI/styles";

export const App = () => {
  return (
    <AppWrapper>
      <BudgetApp />
      <Expenses />
      <Form />
    </AppWrapper>
  );
};
