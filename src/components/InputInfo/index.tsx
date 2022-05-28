import React from 'react';

import { TextInputProps } from 'react-native';
import IconWord from '../../assets/icon-worldblue.svg';
import IconEdit from '../../assets/icon-pencil.svg';
import * as Styled from './styles';

export type Props = {
  icon?: any;
};

export default function InputInfo(props: TextInputProps, { icon }: Props) {
  return (
    <Styled.Container>
      <Styled.BoxIcon>
        {icon ? icon : <IconWord width={18} height={18} />}
      </Styled.BoxIcon>
      <Styled.InputInfoName placeholderTextColor={'#A5D8FF'} {...props} />
      <Styled.BoxIcon2>
        <IconEdit width={20} height={20} />
      </Styled.BoxIcon2>
    </Styled.Container>
  );
}
