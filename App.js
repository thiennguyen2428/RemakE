import React from 'react';
import {StatusBar} from 'react-native';
import {TikiHome} from './src/tiki-home';

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <TikiHome />
    </>
  );
};

export default App;
