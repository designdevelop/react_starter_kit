import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './configureStore.js';

ReactDOM.render(
	<Provider store = {store}>
		<PersistGate loading={null} persistor={persistor}>
			<App/>
		</PersistGate>
	</Provider>
, document.getElementById('root'));
