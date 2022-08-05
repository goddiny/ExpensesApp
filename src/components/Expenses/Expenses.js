import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Selected year is:");
    console.log(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear.toString();
  });
  
  //   console.log(filteredExpenses);
  //   console.log(items[0].date.toString().split(' ')[3] == filteredYear.toString());
  //   console.log(filteredYear.toString());
  //   console.log(!filteredExpenses.length);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {!filteredExpenses.length && <p>No expenses found...</p>}
      {!!filteredExpenses.length &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
