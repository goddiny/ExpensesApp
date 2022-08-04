import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {

  const [filteredYear, setFilteredYear] = useState("2019");

  // тут соответственно стейта не было

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
	console.log(selectedYear);

	// а сюда из onChangeFilter ниже прилетало значение стейта и делался лог
	// который так же выводил предыдущее.
	// как только я перенес стейт сюда, а оттуда прокидывал только значение - все отлично работает.
	
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {items.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
