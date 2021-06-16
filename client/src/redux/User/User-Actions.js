export const signUpStart = (userInfo) => ({
    type: 'SIGN_UP_START',
    payload: userInfo
})

export const signUpSuccess = ({ user, additionalData }) => ({
    type: 'SIGN_UP_SUCCESS',
    payload: { user, additionalData }
})

export const signUpFail = (error) => ({
    type: 'SIGN_UP_FAIL',
    payload: error
})

export const googleSignInStart = () => ({
    type: 'GOOGLE_SIGN_IN_START'
})

export const emailSignInStart = (emailAndPassword) => ({
    type: 'EMAIL_SIGN_IN_START',
    payload: emailAndPassword
})

export const signInSuccess = (user) => ({
    type: 'SIGN_IN_SUCCESS',
    payload: user
})

export const signInFail = (error) => ({
    type: 'SIGN_IN_FAIL',
    payload: error
})

export const checkUserSession = () => ({
    type: 'CHECK_USER_SESSION'
})

export const signOutStart = () => ({
    type: 'SIGN_OUT_START'
})

export const signOutSuccess = () => ({
    type: 'SIGN_OUT_SUCCESS',
    
})

export const signOutFail = (error) => ({
    type: 'SIGN_OUT_FAIL',
    payload: error
})
