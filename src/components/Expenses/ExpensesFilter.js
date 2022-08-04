import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

// Не работало: 
// тут был стейт
// const [selectedYear, setSelectedYear] = useState('');

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
	// а тут был setSelectedYear(event.target.value);
	// и props.onChangeFilter(selectedYear)
	// console.log(event.target.value) работал и выводил корректное значение
	// а вот лог selectedYear выводил предыдущее значение, то есть сначала пустые скобки,
	// а затем предыдущее значение
	// дальше смотри Expenses.
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
