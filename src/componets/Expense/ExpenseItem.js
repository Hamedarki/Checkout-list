import React , {useState} from "react";
import './ExpenseItem.css'
import Card from '../Card/Card'

const ExpenseItem = (props) =>{
   const [title,setTitle] = useState(props.title)
   const changeHandler = () =>{
       setTitle('this is change')
   }


   return(
      <Card className="expense-item">
         <div>{props.date}</div>
         <div className="expense-item__descreiption">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.cost}</div>
         </div>
         <button onClick={changeHandler}>Change Title</button>
      </Card>
   )
}


export default ExpenseItem