import React, { useState } from 'react';


function TransactionTable({ transactions, deleteTransaction }) {
    const [sortField, ] = useState(null);

    let sortedtransactions = [...transactions];
    if (sortField !== null) {
        sortedtransactions.sort((a, b) => a[sortField].localeCompare(b[sortField]));
    }


    return (
        <table>
            <thread>
                <tr>
                    <th>Description</th>
                    <th>                        Category
                    </th>
                    <th>Amount</th>
                    <th>Actions</th>                    
                </tr>
            </thread>

            <tbody>
                {sortedtransactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>
                            {transaction.description}
                        </td>
                        <td>
                            {transaction.category}
                        </td>
                        <td>
                            {transaction.amount}
                        </td>
                        <td>
                            <button onClick={() => {
                                if (window.confirm('Are you sure you wish to delete this item?'))
                                    deleteTransaction(transaction.id)
                            }}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TransactionTable;