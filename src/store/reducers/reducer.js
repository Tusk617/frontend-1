import {v4 as uuid} from 'uuid'

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
    SUBMIT_TODO_LIST,
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
        firstname: "",
        lastname: "",
        todolists: [],
        isLoggedIn: false,
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
    // const idConditional = !payload.userid ? uuid() : payload.userid;

    switch (type) {
        case SIGN_UP_START: 
        case LOG_ON_START:
        case LOAD_START : 
            return { ...state, loading: true, }
        case SIGN_UP_SUCCESS:
            return {
                user: {
                    ...state.user,
                    ...payload,
                    isLoggedIn: true
                },
                loading: false
            }
        case LOG_ON_SUCCESS:
            return { ...state, 
            user: { username: payload.username,
                password: payload.password,
                    isLoggedIn: true }, 
            loading: false }
        case SIGN_UP_FAIL :
        case LOAD_SUCCESS:
            console.log(payload)
            return { ...state,
                    user: {
                        ...state.user,
                        todolists: payload.todolists,
                        userID: payload.userid,
                        firstName: payload.firstname,
                        lastName: payload.lastname,
                    },
                    error: initialState.error,
                    loading: false 
                }
                        case LOG_ON_FAIL:
        case LOAD_FAILURE:
            return { ...state, error : payload, loading: false }
        case SUBMIT_TODO_LIST:
            return { ...state, 
                todolists: [...state.todolists, payload] };
        default:
            return state
        }
}
