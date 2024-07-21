import { useState } from "react"
import { useReducer } from "react"

let initialState = {balance : 20000,error:null}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'withdraw':
            if((state.balance - action.payload) <500)
                return{...state,error:'Insufficient Balance'}
            else
                return {...state,balance:state.balance - action.payload,error:null}
        case 'deposit':
            return {...state,balance:state.balance + action.payload,error:null}
        case 'checkBalance':
            return{balance:state.balance,error:null}
    }
}
function BankBalance()
{
    let[state,dispatch]=useReducer(reducer,initialState);
    let[input,setInput] = useState('')
    let[showBalance,setShowBalance]=useState(false)
    return(
        <div>
            <b>Enter amount</b><br></br>
            <input type="text" value={input} onChange={(event)=>{setInput(event.target.value)}}></input><br></br>
            <button onClick={()=>dispatch({'type':'withdraw','payload':Number(input)})}>Withdraw</button><br></br>
            <button onClick={()=>dispatch({'type':'deposit','payload':Number(input)})}>Deposit</button><br></br>
            <button onClick={()=>{setShowBalance(true);dispatch({'type':'checkBalance',})}}>Check Balance</button>
            {showBalance && <b>Balance:{state.balance}</b>}
            {state.error && <b style={{color:'red'}}>{state.error}</b>}
        </div>
    )
}
export default BankBalance;