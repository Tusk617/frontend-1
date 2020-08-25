import {LOAD_START, LOAD_SUCCESS, LOAD_FAILURE, SUBMIT_TODO, /* EDIT_TODO, DEL_TODO, SELECT_TODO*/} from '../'
const initialState = {
    todos: [],
    // selectedTodo: "" , // The ID of selected TODO
    loading: false,
    error: ""
    //todoFormOpen: false
}

const initTodoValues = {
    itemID: "",
    name: "",
    description: "",
    dueDate: "",
    frequency: "",
    // selected: false,

}

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_START:
            return { ...state,
                    loading: true };
        case LOAD_SUCCESS:
            return { ...state,
                    todos: payload,
                    loading: false }
        case LOAD_FAILURE:
            return { ...state,
                     loading: false,
                     error: payload}
        case SUBMIT_TODO:
            return { ...state, 
                    todos: [...state.todos, payload] };
        // case EDIT_TODO:
        //     return { ...state, ...payload }; 
        // case DEL_TODO:
        //     return { ...state, ...payload };    
        // case SELECT_TODO:
        //     return {}

        default:
            return state
    }
}

export default todoReducer