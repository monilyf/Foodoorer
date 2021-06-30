import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['cart']
};
// console.log('Storeeeeeeeeeeee')
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//     rootReducer,applyMiddleware(sagaMiddleware)

// );

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

export let persistor = persistStore(store, null, () => {
    console.log('rehydrated');
});

sagaMiddleware.run(rootSaga)



export default store