import React, {useState} from "react"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter"
const Expenses = (props) => {

    const [filterdYear, setFilterYard] = useState('2020')
    const expenseFilterHandler = yearSelect => {
        setFilterYard(yearSelect)
    }

    // const filterdExpense = props.items.filter(expense=>{     return
    // expense.date.getFullYear() })
    return (
        <div>
            <ExpenseFilter
                selected={filterdYear}
                onSelectYear={expenseFilterHandler}/>
            <div className="expenses">
                {/* TODO:should refactor names */}
                {
                    props
                        .items
                        .map(
                            (expense, index) => <ExpenseItem
                                key={index}
                                title={expense.title}
                                cost={expense.author}
                                date={expense.publishedAt}/>
                        )
                }
                {/* <ExpenseItem title={props.items[0].title} cost={props.items[0].cost} date={props.items[0].date} />
            <ExpenseItem title={props.items[1].title} cost={props.items[1].cost} date={props.items[1].date} />
            <ExpenseItem title={props.items[2].title} cost={props.items[2].cost} date={props.items[2].date} />
            <ExpenseItem title={props.items[3].title} cost={props.items[3].cost} date={props.items[3].date} /> */
                }
            </div>
        </div>

    )
}

export default Expenses;