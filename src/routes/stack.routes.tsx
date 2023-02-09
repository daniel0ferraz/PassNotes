import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

import Home from '../screens/Home';
import RegisterItem from '../screens/RegisterItem';
import ViewItem from '../screens/ViewItem';

export function StackRoutes() {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Home" component={Home} />
        <Screen name="RegisterItem" component={RegisterItem} />
        <Screen name="ViewItem" component={ViewItem} />
      </Navigator>
    </>
  );
}
