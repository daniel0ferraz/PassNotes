/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import LoginHub from '../screens/LoginHub';
import LoginMail from '../screens/LoginMail';
import ForgotPassword from '../screens/ForgotPassword';

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
      </Navigator>
    </>
  );
}
