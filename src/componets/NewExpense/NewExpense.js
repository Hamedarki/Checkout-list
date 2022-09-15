import './NewExpense.css'
import React from 'react';
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) => {
   const saveExpenseDataHandler = (entherdExpenseData) =>{
      const expenseData ={
         ...entherdExpenseData,
         id:Math.random().toString()
      }
      props.onAddExpense(expenseData)
   }
   return (  
      <div className='new-expense'>
         <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
      </div>
   );
}
 
export default NewExpense;