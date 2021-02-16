import React, {useState} from 'react';
import {connect} from 'react-redux'

function AddTodo(props)
{
    const [input, setInput] = useState({todo : "", id : 0});
    
    let idCounter = 1;
    function handleClick()
    {
        setInput({todo : "", id : ""});
        props.dispatch({type: 'ADD_TODO', payload: input})
        idCounter++;
    }

    return(
        <div>
            <input placeholder = "Type in todo here" type = 'text' value = {input.todo} onChange= {e => setInput({todo: e.target.value, id:idCounter})}/>
            <button onClick = {handleClick}>add to todo</button>
        </div>
    )
}

const mapStateToProps = state => ({
    listItems: state.listItems
})


export default connect(mapStateToProps)(AddTodo);
