import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

import Home from '../screens/Home';
import RegisterItem from '../screens/RegisterItem';


export function StackRoutes() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Home" component={Home} />
        <Screen name="RegisterItem" component={RegisterItem} />

      </Navigator>
    </>
  );
}
