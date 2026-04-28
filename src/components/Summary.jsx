import "./Summary.css"

export function Summary({totalExpenses, totalIncome, totalBalance}) {
    return (
        <div id="summary" style={{backgroundColor: "#1e293b", width: "100%", border: "1px solid lightgray", padding: "20px", borderRadius: "5px"}}>
        <h4>Total Balance: ${totalBalance.toFixed(2)}</h4>
        <h4 style={{color: "#22c55e"}}>Total Income: ${totalIncome.toFixed(2)}</h4>
        <h4 style={{color: "red"}}>Total Expenses: ${totalExpenses.toFixed(2)}</h4>
        </div>
        
    )
}