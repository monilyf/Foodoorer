import React from 'react';
import RootNavigator from './src/router';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react'

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator/>
      </PersistGate>
    </Provider>
  )
};

export default App;
  