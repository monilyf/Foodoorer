import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key:'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig,rootReducer);



const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//     rootReducer,applyMiddleware(sagaMiddleware)
    
// );

const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware));

export let persistor = persistStore(store,null,()=>{
    console.log('rehydrated');
});

sagaMiddleware.run(rootSaga)

export default store;