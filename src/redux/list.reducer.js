
import { addItemToList } from './list.utils'
import { addTodo, INCREMENT_ID } from './list.actions'

const INTIAL_STATE = {
    listItems: [],
    id: 0
}

const listReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                listItems: addItemToList(state.listItems, action.payload)
            }
        case 'INCEREMENT_ID':
            return{
                ...state,
                id: INCREMENT_ID()
            }
        default: 
            return state
    }
}
export default listReducer