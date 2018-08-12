import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import promise from 'redux-promise';

const persistConfig = {
  key: 'root',
  storage,
}

/**
 * [persistedReducer description]
 * @arguments 
 * 		1. config object : ex -> {'key' : 'root', reducer}
 */
const persistedReducer = persistReducer(persistConfig, reducers)

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export const store = createStoreWithMiddleware(persistedReducer)
export const persistor = persistStore(store, function(){
	console.log("dddd");
})