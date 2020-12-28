
import { addItemToList } from './list.utils'
import { addTodo } from './list.actions'

const INTIAL_STATE = {
    listItems: []
}

const listReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                listItems: addItemToList(state.listItems, action.payload)
            }
        default: 
            return state
    }
}
export default listReducer