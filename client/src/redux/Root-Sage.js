import { all, call } from 'redux-saga/effects';
import { shopSagas } from './Shop/Shop-Saga'
import { userSagas } from './User/User-Saga'
import { cartSagas } from './Cart/Cart-Saga'

export default function* rootSaga() {
    yield all([call(shopSagas), call(userSagas), call(cartSagas)])
}