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
} from '..'

const initialState = {
    users : [],
    selected : "" //id-string
}

 const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_UP_START:
            return { ...state}
        case SIGN_UP_SUCCESS:
            return {...state, ...payload }
        case SIGN_UP_FAIL :
            return { ...state, error : payload }
        case LOG_ON_START:
            return { ...state, ...payload }
        case LOG_ON_SUCCESS:
            return { ...state, ...payload }
        case LOG_ON_FAIL:
            return { ...state, ...payload }
        
        default:
            return state
    }
}

export default userReducer
