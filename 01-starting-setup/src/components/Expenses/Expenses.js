import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

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
                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
