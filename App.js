import React from 'react';
import Navigation from './src/Navigation/index';
import {NavigationContainer} from '@react-navigation/native';
import Cars from './src/Screens/Cars';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Navigation />
    // </NavigationContainer>
    <Cars />
  );
};

export default App;
