import React from 'react';
import NavigationFlow from './src/NavigationFlow';
import store from './src/Redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationFlow />
    </Provider>
  );
};

export default App;
