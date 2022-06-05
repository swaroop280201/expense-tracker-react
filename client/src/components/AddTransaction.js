import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');  

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
        <hr style={{color: "red"}}/><hr style={{color: "red"}}/>
        <h3 style={{textAlign:"center", backgroundColor:"black", color:"white", padding:'10px'}}>Add New Transaction</h3>
        
        <form onSubmit={onSubmit} style={{backgroundColor:"#DDE1E1", padding:'20px', border:"2px solid gray"}}>

            <div className="form-control" >
            <h4><label htmlFor="text" style={{color: "blue"}}>Describe Transaction : </label></h4>
            <input type="text" value={text} style={{border: "2px solid skyblue"}} onChange ={(e) => setText(e.target.value)} placeholder="Enter text..." /> <br/><hr/>
            </div>

            <div className="form-control">
            <h4><label htmlFor="amount" style={{color: "blue"}}>Enter Debited/Credited Amount : </label></h4> <br/>
            <h4 style={{color: "red"}}>Note:</h4><h5>For Income :- Amount start with (+) sign.<br/> For Expense :- Amount start with (-) sign.</h5>
            <input type="number" value={amount}  style={{border: "2px solid skyblue"}} onChange ={(e) => setAmount(e.target.value)} placeholder="Enter amount..." /> <hr/><hr/>
            </div> <br/>

            <button className="btn">Add transaction</button>
        </form> 
        </>
  )
}
