import React, { Component } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default class NewExpense extends Component {
    render() {
        return (
            <div className="new-expense">
                <ExpenseForm />
            </div>
        );
    }
}
