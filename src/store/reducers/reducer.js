import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    LOG_ON_START,
    LOG_ON_SUCCESS,
    LOG_ON_FAIL,
    LOAD_START,
    LOAD_SUCCESS,
    LOAD_FAILURE,
    SUBMIT_TODO,
    // LOG_OUT,
    // EDIT_ACCT,
    // DEL_ACCT,
} from '..'

const initialState = {
    user : {
        userID: "",
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        todos: [],
        isLoggedIn: true,
    },
    loading: false,
    error: ""
}

const initTodoValues = {
    itemID: "",
    name: "",
    description: "",
    dueDate: "",
    frequency: "",
    // selected: false,

}

 export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_START : 
        case SIGN_UP_START: 
        case LOG_ON_START:
            return { ...state, loading: true, }
        case LOAD_SUCCESS:
            return { ...state,
                    todos: payload,
                    loading: false }
        case SIGN_UP_SUCCESS:
        case LOG_ON_SUCCESS:
            return { ...state, user: { ...payload, isLoggedIn: true }, loading: false }
        case SIGN_UP_FAIL :
        case LOG_ON_FAIL:
        case LOAD_FAILURE:
            return { ...state, error : payload, loading: false }
        case SUBMIT_TODO:
            return { ...state, 
                    todos: [...state.todos, payload] };
        default:
            return state
    }
}
