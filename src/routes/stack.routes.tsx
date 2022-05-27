/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import ForgotPassword from '../screens/ForgotPassword';
import LoginMail from '../screens/LoginMail';
import LoginHub from '../screens/LoginHub';

export function StackRoutes() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen
          name="LoginHub"
          component={LoginHub}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#1971C2',
            },
          }}
        />
        <Screen name="LoginMail" component={LoginMail} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
      </Navigator>
    </>
  );
}
