import React from 'react';
import {ActivityIndicator} from 'react-native';
import {TouchableOpacityProps} from 'react-native';
import * as Styled from './styles';

export type PropsBtnIcon = TouchableOpacityProps & {
  onPress: () => void;
  color: 'Blue' | 'Blue600';
  icon?: any;
  format?: 'square' | 'round';
  isLoading?: boolean;
};

export default function ButtonIcon({
  icon,
  onPress,
  color = 'Blue',
  format = 'square',
  isLoading = false,
  ...rest
}: PropsBtnIcon) {
  return (
    <Styled.BtnIcon onPress={onPress} color={color} format={format} {...rest}>
      {isLoading ? <ActivityIndicator size="small" color="#FFFFFF" /> : icon}
    </Styled.BtnIcon>
  );
}
