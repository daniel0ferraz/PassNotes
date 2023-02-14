import React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import IconEdit from '../../assets/icon-pencilblue.svg';
import { useTheme } from 'styled-components/native';
import { logoSite } from '../../utils/icons';
import * as Styled from './styles';

export type InputProps = TextInputProps & {
  icon?: string | any;
};




export default function InputInfo({ icon, ...rest }: InputProps) {
  const { colors } = useTheme();
  return (
    <Styled.Container>
      <Styled.BoxIcon>
        <View>
          {logoSite(icon)}
        </View>
      </Styled.BoxIcon>
      <Styled.InputInfoName placeholderTextColor={colors.blue} {...rest} />
      <Styled.BoxIcon2>
        <IconEdit width={20} height={20} />
      </Styled.BoxIcon2>
    </Styled.Container>
  );
}
