import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './User/User-Reducer';
import cartReducer from './Cart/Cart-Reducer';
import directoryReducer from './Directory/Directory-Reducer';
import shopReducer from './Shop/Shop-Reducer';

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);