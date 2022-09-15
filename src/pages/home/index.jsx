import React ,{useState} from "react";
import { useEffect } from "react";
import Expense from '../../componets/Expense/Expenses'
import NewExpense from "../../componets/NewExpense/NewExpense";
import axios from "axios";




const Home = () => {
  
useEffect(()=>{
   //TODO:should get api-key from env
   const url = `https://newsapi.org/v2/everything?q=apple&from=2022-09-14&to=2022-09-14&sortBy=popularity&apiKey=af5bb5cc5a2648608eb17984632940c9`
   axios.get(url)
   .then(function (response) {
     // handle success
     setExpense(response.data.articles);
   })
   .catch(function (error) {
      //TODO:handling loading 
     //TODO:handle error
     console.log(error);
   })
},[])
 
const[expenses,setExpense] = useState([6])

const addExpenseHandler = (expense) =>{
   setExpense((preventExpense)=>{
   return[expense , ...preventExpense]
});
}
   return ( 
      <div>
         <NewExpense onAddExpense={addExpenseHandler}/>
         <Expense items ={expenses} />
         
      </div>
    );
}
 
export default Home;