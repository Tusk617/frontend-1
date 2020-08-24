import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL,
    LOG_ON_START,
    LOG_ON_SUCCESS,
    LOG_ON_FAIL,
    // LOG_OUT,
    // EDIT_ACCT,
    // DEL_ACCT,
} from '../'

const initialState = {
    // isLoggedIn : false,
    firstName : "",
    lastName : "",
    username : "",
    password : "",
    email : "",
    error : "", 
    // theme = null,

}

 const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case SIGN_UP_START:
        return { ...state, ...payload }
    case SIGN_UP_SUCCESS:
        return { ...state, ...payload }
    case SIGN_UP_FAIL :
        return { ...state, ...payload }
    case LOG_ON_START:
        return { ...state, ...payload }
    case LOG_ON_SUCCESS:
        return { ...state, ...payload }
    case LOG_ON_FAIL:
        return { ...state, ...payload }
    // case LOG_OUT:
    //     return { ...state, ...payload }
    // case EDIT_ACCT:
    //     return { ...state, ...payload }
    // case DEL_ACCT:
    //     return { ...state, ...payload }
                            


    default:
        return state
    }
}

export default authReducer
