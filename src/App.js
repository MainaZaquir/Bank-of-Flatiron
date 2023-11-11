import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import NavBar from './Navbar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(' http://localhost:3000/transactions')
      .then((Response) => Response.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (transaction) => {
    const maxId = Math.max(...transactions.map(t => t.id));
    transaction.id = maxId + 1;
    
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const filteredTransactions = transactions.fiter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar setSearchTerm={setSearchTerm} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionTable
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
