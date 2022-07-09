import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import LoginHub from '../screens/LoginHub';
import LoginMail from '../screens/LoginMail';
import ForgotPassword from '../screens/ForgotPassword';
import RegisterMail from './../screens/RegisterMail';
import Home from '../screens/Home';
import RegisterItem from '../screens/RegisterItem';
import ViewItem from '../screens/ViewItem';
import About from './../screens/Onboarding/About';
import AboutApp from './../screens/Onboarding/AboutApp';
import Welcome from '../screens/Onboarding/Welcome';
import Onboarding from '../screens/Onboarding';

export function StackRoutes() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Onboarding" component={Onboarding} />
        {/* <Screen name="About" component={About} /> */}
        {/* <Screen name="AboutApp" component={AboutApp} /> */}
        {/* <Screen name="Welcome" component={Welcome} /> */}

        {/* <Screen name="LoginHub" component={LoginHub} />
        <Screen name="LoginMail" component={LoginMail} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="RegisterMail" component={RegisterMail} />
        <Screen name="Home" component={Home} />
        <Screen name="RegisterItem" component={RegisterItem} />
        <Screen name="ViewItem" component={ViewItem} /> */}
      </Navigator>
    </>
  );
}
