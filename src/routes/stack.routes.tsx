import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import LoginHub from '../screens/LoginHub';
import LoginMail from '../screens/LoginMail';
import ForgotPassword from '../screens/ForgotPassword';
import RegisterMail from './../screens/RegisterMail';
import Home from '../screens/Home';

export function StackRoutes() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="LoginHub" component={LoginHub} />
        <Screen name="LoginMail" component={LoginMail} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="RegisterMail" component={RegisterMail} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </>
  );
}
