import React from 'react';
import { Provider } from 'react-redux';

import {store} from './store';
import AppNavigationContainer from './src/navigation';

function App() {
  return (
    <Provider store={store}>
      <AppNavigationContainer/>
    </Provider>
  );
}

export default App;