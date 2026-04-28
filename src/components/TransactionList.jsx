import "./transactionList.css";

export function TrasactionList({transactions, setTransactions, setEditingTransaction}) {

    const deleteTransaction = (id) => {
        const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
        setTransactions(updatedTransactions);
    }
    function handleEdit(transaction) {
    
        setEditingTransaction(transaction);
   }
    return (
        <div id="transaction-list" style={{backgroundColor: "#1e293b", width: "100%", border: "1px solid lightgray", padding: "20px", borderRadius: "5px"}}>
        <h1>Transaction List</h1>
        {
            transactions.map((transaction) => 
            <>
           <p style={{ fontWeight: 700}}>{`${transaction.description} -$${transaction.amount}`}
            <span><button id="del" style={{backgroundColor: "red", color: "#f1f5f9", marginLeft: "10px", padding: "5px", borderRadius: "10px"}}
            onClick={() => deleteTransaction(transaction.id)}>delete</button></span>
           <span><button className= "edit-button" style={{backgroundColor: "#4f46e5", color: "#f1f5f9", marginLeft: "10px", padding: "5px", borderRadius: "10px"}}
            onClick={() => handleEdit(transaction)}>Edit</button></span></p>
            </>
            )
        }
        </div>
    )
}