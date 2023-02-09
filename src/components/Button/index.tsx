import React from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import * as Styled from './styles';

export type PropsButton = TouchableOpacityProps & {
  children: React.ReactNode;
  color?: 'Blue' | 'Blue600' | 'Blue100';
  size?: 'Small' | 'Medium';
  textColor?: 'White' | 'Bluetxt';
  isLoading?: boolean;
};

export default function Button({
  children,
  color = 'Blue',
  size = 'Medium',
  textColor = 'White',
  isLoading = false,
  ...rest
}: PropsButton) {
  return (
    <Styled.Button color={color} size={size} {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <Styled.TextButton textColor={textColor}>{children}</Styled.TextButton>
      )}
    </Styled.Button>
  );
}
