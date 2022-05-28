import React from 'react';

import { TextInputProps } from 'react-native';

import * as Styled from './styles';

export default function InputField(props: TextInputProps) {
  return <Styled.InputField placeholderTextColor={'#A5D8FF'} {...props} />;
}
