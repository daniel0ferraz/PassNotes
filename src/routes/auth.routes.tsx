import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

import LoginMail from '../screens/LoginMail';
import ForgotPassword from '../screens/ForgotPassword';
import RegisterMail from '../screens/RegisterMail';
import Onboarding from '../screens/Onboarding';

export function AuthRoutes() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="LoginMail" component={LoginMail} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="RegisterMail" component={RegisterMail} />
      </Navigator>
    </>
  );
}
