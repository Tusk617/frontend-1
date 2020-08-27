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
    CREATE_LIST_START,
    CREATE_LIST_FAIL,
    CREATE_LIST_SUCCESS,
    ADD_TODO_START,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL
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
    date: "",
    frequency: "",
    // selected: false,

}


export const reducer = (state = initialState, { type, payload }) => {
    // const idConditional = !payload.userid ? uuid() : payload.userid;

    switch (type) {
        case SIGN_UP_START: 
        case LOG_ON_START:
        case LOAD_START : 
        case CREATE_LIST_START:
        case ADD_TODO_START:
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
        case CREATE_LIST_SUCCESS:
            console.log(state.todolists)
            return { ...state,
                user: {
                    ...state.user,
                    todolists: [ ...state.user.todolists, payload], }
                }
        case ADD_TODO_SUCCESS:
            console.log(payload)
            return {
                ...state,
                user: {
                    ...state.user,
                    todolists: state.user.todolists.map( list => {
                        if (list.title === payload.list){
                            return {
                                ...list, items: [ ...list.items, payload.todoVals]
                            }
                        } else {
                            return list
                        }
                    })
                }
            }
        case LOAD_SUCCESS:
            return { ...state,
                user: {
                    ...state.user,
                    todolists: payload.todolists,
                    userID: payload.userid,
                    firstname: payload.firstname,
                    lastname: payload.lastname,
                },
                error: initialState.error,
                loading: false 
            }
        case LOG_ON_FAIL:
        case SIGN_UP_FAIL :
        case LOAD_FAILURE:
        case CREATE_LIST_FAIL:
        case ADD_TODO_FAIL:
            return { ...state, error : payload, loading: false };
        default:
            return state
        }
}
