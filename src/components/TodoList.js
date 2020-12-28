import React from 'react'
import AddTodo from './AddTodo'
import {connect} from 'react-redux'
import Todo from './Todo';

function TodoList(props)
{
    console.log(props.listItems[0]);
    return(
        <div>
            <h1>TODO</h1>
            <AddTodo />
            <ul>
            </ul>

            <ul>{props.listItems.map( todoItems =>{
                return <Todo key = {todoItems.key} todo = {todoItems.todo}/>
            })
            
            } </ul>

        </div>
    )
}


const mapStateToProps = state => ({
    listItems: state.listItems
})


export default connect(mapStateToProps)(TodoList);


