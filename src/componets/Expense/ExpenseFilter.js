import React from 'react';
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
   const filterChangr = (event) =>{
      props.onSelectYear(event.target.value)
      console.log(event.target.value)
   }
   return ( 
      <div>
         <label>Filter By Year</label>
         <select  value={props.selected} onChange={filterChangr}>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
         </select>
      </div>
     
    );
}
 
export default ExpenseFilter;