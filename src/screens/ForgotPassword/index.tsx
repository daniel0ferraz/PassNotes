import React from 'react';

import { View } from 'react-native';
import { Text } from 'react-native-svg';

import * as Styled from './styles';

export default function ForgotPassword() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Esqueci a senha</Text>
    </View>
  );
}
