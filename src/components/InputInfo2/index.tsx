import React from 'react';

import { TextInputProps } from 'react-native';
import IconWord from '../../assets/icon-worldblue.svg';
import IconEdit from '../../assets/icon-pencilblue.svg';
import * as Styled from './styles';
import { useTheme } from 'styled-components';

export type Props = {
  icon?: any;
};

export default function InputInfo2(props: TextInputProps, { icon }: Props) {
  const { colors } = useTheme();
  return (
    <>
      <Styled.Container>
        <Styled.BoxIcon>
          {icon ? icon : <IconWord width={20} height={20} />}
        </Styled.BoxIcon>
        <Styled.InputInfoName placeholderTextColor={colors.blue} {...props} />
        <Styled.BoxIcon2>
          <IconEdit width={20} height={20} />
        </Styled.BoxIcon2>
      </Styled.Container>
    </>
  );
}
