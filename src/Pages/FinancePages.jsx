import {useState, useEffect} from "react";
import {Charts} from "../components/charts"
import {Header} from "../components/Header";
import {Summary} from "../components/Summary";
import {TransactionForm} from "../components/TransactionForm";
import {TrasactionList} from "../components/TransactionList";
import "./financePage.css"
export function FinancePage() {
    const [transactions, setTransactions] = useState([]);
    const [editingTransaction, setEditingTransaction] = useState(null);

   
    const totalExpenses = transactions.filter((transaction) => transaction.type === "expense").reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
    const totalIncome = transactions.filter((transaction) => transaction.type === "income").reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
    const totalBalance = totalIncome - totalExpenses;
  

   
    return (
        <div id="container">
            <Header />
            <Summary totalExpenses={totalExpenses} totalIncome={totalIncome} totalBalance={totalBalance} />
           
            <TransactionForm transactions={transactions} setTransactions={setTransactions} setEditingTransaction={setEditingTransaction} editingTransaction={editingTransaction}/>
            <TrasactionList transactions={transactions} setTransactions={setTransactions} setEditingTransaction={setEditingTransaction}/>
        </div>
    )
}