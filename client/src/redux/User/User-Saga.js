import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'; 
import { signUpSuccess, signUpFail, signInSuccess, signInFail, signOutSuccess, signOutFail } from './User-Actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {

    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch(error) {
        yield put(signInFail(error.message))
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess({ user, additionalData: { displayName } }))
    } catch(error) {
        yield put(signUpFail(error.message))
    }
}

export function* onSignUpStart() {
    yield takeLatest('SIGN_UP_START', signUp)
}

export function* signInAfterSignUp({ payload: { user, additionalData }}) {
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onSignUpSuccess() {
    yield takeLatest('SIGN_UP_SUCCESS', signInAfterSignUp)
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch(error) {
        yield put(signInFail(error.message))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch(error) {
        yield put(signInFail(error.message))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest('EMAIL_SIGN_IN_START', signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) {
            return;
        } 
        yield getSnapshotFromUserAuth(userAuth)
    } catch(error) {
        yield put(signInFail(error.message))
    }
}

export function* onCheckUserSession() {
    yield takeLatest('CHECK_USER_SESSION', isUserAuthenticated)
}

export function* signOut() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFail(error.message))
    }
}

export function* onSignOutStart() {
    yield takeLatest('SIGN_OUT_START', signOut)
}
export function* userSagas() {
    yield all([call(onEmailSignInStart), call(onGoogleSignInStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart), call(onSignUpSuccess)])
}