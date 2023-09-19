import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpenseseChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    // let filterInfoText = '2019, 2021 & 2022';

    // if (filteredYear === '2019') {
    //     filterInfoText = '2020, 2021 & 2022';
    // } else if (filteredYear === '2021') {
    //     filterInfoText = '2019, 2020 & 2022';
    // } else if (filteredYear === '2022') {
    //     filterInfoText = '2019, 2020 & 2021';
    // }

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        console.log(expense.date.getFullYear().toString() === filteredYear);
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeHandler={filterChangeHandler} />
                {/* <p>Data for year {filterInfoText} is hidden.</p> */}
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
