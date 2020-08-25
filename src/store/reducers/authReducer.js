import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    LOG_ON_START,
    LOG_ON_SUCCESS,
    LOG_ON_FAIL,
    LOAD_START
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

 const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_START: 
            return { ...state, loading: true, }
        case SIGN_UP_START:
            return { ...state}
        case SIGN_UP_SUCCESS:
            return { ...state, user: { ...payload, isLoggedIn: true }, loading: false }
        case SIGN_UP_FAIL :
            return { ...state, error : payload, loading: false }
        case LOG_ON_START:
            return { ...state, loading: true }
        case LOG_ON_SUCCESS:
            return { ...state, user:{...payload, isLoggedIn: true}, loading: false }
        case LOG_ON_FAIL:
            return { ...state, error: payload, loading: false }
        
        default:
            return state
    }
}

export default authReducer
