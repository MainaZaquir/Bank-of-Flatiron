import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (description === '' || amount === '') {
            alert('Both fields are required!');
        }
        else {
            addTransaction({ description, amount });
            setDescription('');
            setAmount('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description required'
            />

            <input
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Amount required'
            />

            <button type='submit'>Add Transaction</button>
        </form>
    );
}

export default TransactionForm