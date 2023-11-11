import React, { useState } from 'react';


function TransactionTable({ trasactions, deleteTransaction }) {
    const [sortField, setSortField] = useState(null);

    let sortedtransactions = [...trasactions];
    if (sortField !== null) {
        sortedtransactions.sort((a, b) => a[sortField].localeCompare(b[sortField]));
    }


    return (
        <table>
            <thread>
                <tr>

                    <th onClick={() => setSortField('description')}>
                        Description
                    </th>

                    <th onClick={() => setSortField('category')}>
                        Category
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