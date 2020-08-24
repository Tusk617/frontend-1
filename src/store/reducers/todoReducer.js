const initialState = {
    todos: [],
    selectedTodo: "" , // The ID of selected TODO
    loading: false,
    error: ""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_TODOS:
            return { ...state,
                    loading: true };
        case LOAD_TODOS_SUCCESS:
            return { ...state,
                    todos: payload,
                    loading: false }
        case LOAD_TODOS_FAILURE:
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
