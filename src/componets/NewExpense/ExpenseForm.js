import './Expenseform.css'
import React , {useState} from 'react'
const ExpenseForm = (props) => {
   const [entherdTitle , setValue] = useState('')
   const [entherdAmount , setAmount] = useState('')
   const [entherdDate , setDate] = useState('')
   // const [userInput , setUserInput] = useState({
   //    entherdTitle : '' ,
   //    entherdAmount : '' ,
   //    entherDate : '',
   // })
   const handlerChnageText = (e)=>{
      setValue(e.target.value)
      // setUserInput({...userInput,entherdTitle: e.target.value})
      // setUserInput((prevent=>{
      //    return{...prevent,entherdTitle:e.target.value}
      // }))
   }
   const handlerChnageDate = (e)=>{
      setDate(e.target.value)
      // setUserInput({...userInput,entherDate:e.target.value})
      // setUserInput((prevent)=>{
      //    return{...prevent,entherDate:e.target.value}
      // })
   }
   const handlerChnageAmount = (e)=>{
      setAmount(e.target.value)
      // setUserInput({...userInput,entherdAmount:e.target.value})
      // setUserInput((prevent=>{
      //    return{...prevent,entherdAmount:e.target.value}
      // }))
   }

   const submitHandler =(event) =>{
      event.preventDefault(); 
      const expenseData={
         title: entherdTitle ,
         cost: entherdAmount ,
         date:Date(entherdDate)
      };
      props.onSaveExpenseData(expenseData);
      setAmount('');
      setDate('');
      setValue('');
   }


   return ( 
      <form onSubmit={submitHandler}>
         <div className='new-expense__contorols'>            
         <div className='new-expense__contorol'>
            <label>Title</label>
            <input type='text' onChange={handlerChnageText} value={entherdTitle}/>
         </div>
         <div className='new-expense__contorol'>
            <label>Amount</label>
            <input type='number' min='0.1' step='0.1' onChange={handlerChnageAmount} value={entherdAmount}/>
         </div>
         <div className='new-expense__contorol'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={handlerChnageDate} value={entherdDate}/>
         </div>
         </div>
         <div className='new-expense__actions'>
            <button type='submit' >Submit</button>
         </div>
      </form>
    );  
}
 
export default ExpenseForm;