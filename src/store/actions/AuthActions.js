export const SIGN_UP = "SIGN_UP"
export const LOG_ON = "LOG_ON"
export const EDIT_ACCT = "EDIT_ACCT"
export const DEL_ACCT = "DEL_ACCT"



export const signUp = (payload) => ({
    type: SIGN_UP,
    payload
})

export const logOn = (payload) => ({
    type: LOG_ON,
    payload: payload,
})

export const editAcct = (payload) => ({
    type: EDIT_ACCT,
    payload
})

// export const delAcct = (payload) => ({
//     type: DEL_ACCT,
//     payload
// })
