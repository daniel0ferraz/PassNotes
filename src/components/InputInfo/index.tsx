import React from 'react';

import { Text, TextInputProps } from 'react-native';
import IconWord from '../../assets/icon-worldblue.svg';
import IconWordWhite from '../../assets/icon-world-white.svg';
import IconEdit from '../../assets/icon-pencilblue.svg';

import * as Styled from './styles';
import { useTheme } from 'styled-components/native';

export type InputProps = TextInputProps & {
  icon?: string | any;
};

export default function InputInfo({ icon, ...rest }: InputProps) {
  const { colors } = useTheme();
  return (
    <Styled.Container>
      <Styled.BoxIcon>
        <Text>
          {(icon && icon) || <IconWordWhite width={20} height={20} />}
        </Text>
      </Styled.BoxIcon>
      <Styled.InputInfoName placeholderTextColor={colors.blue} {...rest} />
      <Styled.BoxIcon2>
        <IconEdit width={20} height={20} />
      </Styled.BoxIcon2>
    </Styled.Container>
  );
}
