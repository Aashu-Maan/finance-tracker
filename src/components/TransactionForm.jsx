import {useState, useEffect, use} from "react"
import {PieChart, Pie, Cell, Tooltip, Legend} from "recharts"
import {Charts} from "./charts"
import "./TransactionForm.css"

export function TransactionForm({transactions, setTransactions, setEditingTransaction, editingTransaction}) {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("income")
    const [category, setCategory] = useState("Other");
    const uniqueId = new Date().getTime();
    const newTransaction = {
        id: uniqueId,
        description,
        amount,
        type,
        category
    }
  
   useEffect(() => {
    if(editingTransaction) {
        setDescription(editingTransaction.description);
        setAmount(editingTransaction.amount);
        setType(editingTransaction.type);
    }
   }, [editingTransaction])
  
 function handleSubmit(e) {
    e.preventDefault();
    if(editingTransaction) {
        const updatedTransactions = transactions.map((transaction) => transaction.id === editingTransaction.id ? {...transaction, description, amount, type} : transaction);
        setTransactions(updatedTransactions);
        setEditingTransaction(null);
    } else {
        setTransactions([...transactions, newTransaction]);
        setDescription("");
        setAmount("");
        setType("income");
        setCategory("Other");
    }
 }
 
  const differentExpenses = transactions.reduce((acc, transaction) => {
        acc[transaction.category] = (acc[transaction.category] || 0) + parseFloat(transaction.amount) ;
        return acc;
    }, {})
    

    const arrayOfExpenses = Object.entries(differentExpenses).map(([category, amount]) => ({category, amount}));
    
    return (
        <div id="transaction-form" >
        <Charts arrayOfExpenses={arrayOfExpenses}/>
        <h1>Transaction Form</h1>
        <form onSubmit={handleSubmit} style={{}}>
            <label htmlFor="description">Description:</label>
            <input className="form-inputs" value={description} type="text" id="description" onChange={(e)=> {setDescription(e.target.value)
                
            }} />
            <label htmlFor="amount">Amount:</label>
            <input className="form-inputs" value={amount} type="number" id="amount"  onChange={(e)=> {setAmount(e.target.value)
               
            }}/>
            <label htmlFor="type">Type:</label>
            <select className="form-inputs" value={type} id="type" default="income" onChange={(e)=> {setType(e.target.value)
            }}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <label htmlFor="category">Category:</label>
            <select className="form-inputs" value={category} id="category"onChange={(e) => setCategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Salary">Salary</option>
                <option value="Other">Other</option>
            </select>
            <button type="submit" >Add Transaction</button>
        </form>
        </div>
    )
}