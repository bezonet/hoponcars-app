import React from 'react';
import Navigation from './src/Navigation/index';
import {NavigationContainer} from '@react-navigation/native';
import Cars from './src/Screens/Cars';
import PaymentScreen from './src/Screens/PaymentScreen';
import PayByCash from './src/Screens/PayByCash';
import BeforePayment from './src/Screens/BeforePayment';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Navigation />
    // </NavigationContainer>
    // <Cars />
    // <PaymentScreen />
    // <PayByCash />
    <BeforePayment />
  );
};

export default App;
