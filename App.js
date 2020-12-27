import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Main from './src/pages/Main'

function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#8B10A1'/>
      <Main />
    </>
  )
}

export default App;
