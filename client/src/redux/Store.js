import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './Root-Reducer';
import rootSaga from './Root-Sage'


const sagaMiddleware = createSagaMiddleWare()

const middlewares = [sagaMiddleware, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares)) 

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
