import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StackRoutes} from './stack.routes';
import {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AuthRoutes} from './auth.routes';
export function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const stateUser = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });
    return () => stateUser();
  }, []);

  return (
    <>
      <NavigationContainer>
        {user ? <StackRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </>
  );
}
