import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2019")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("Selected year is:");
    console.log(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear.toString();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
	  <ExpensesChart expenses={filteredExpenses}/>
      {/* If the length is missing, then the message */}
      {!filteredExpenses.length && <p>No expenses found...</p>}

      {/* If there is a length, then render dynamically */}
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
