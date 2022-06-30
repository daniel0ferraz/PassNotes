import React from 'react';

import { Text, TextInputProps } from 'react-native';
import IconWord from '../../assets/icon-worldblue.svg';
import IconEdit from '../../assets/icon-pencil.svg';

import * as Styled from './styles';

export type InputProps = TextInputProps & {
  icon?: string | any;
};

export default function InputInfo({ icon, ...rest }: InputProps) {
  return (
    <Styled.Container>
      <Styled.BoxIcon>
        <Text>{(icon && icon) || <IconWord width={18} height={18} />}</Text>
      </Styled.BoxIcon>
      <Styled.InputInfoName placeholderTextColor={'#FFFFFF'} {...rest} />
      <Styled.BoxIcon2>
        <IconEdit width={20} height={20} />
      </Styled.BoxIcon2>
    </Styled.Container>
  );
}
