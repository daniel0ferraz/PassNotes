import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as Styled from './styles';

export type PropsButton = TouchableOpacityProps & {
  children: React.ReactNode;
  color?: 'Blue' | 'Blue600' | 'Blue100';
  size?: 'Small' | 'Medium';
  textColor?: 'White' | 'Bluetxt';
};

export default function Button({
  children,
  color = 'Blue',
  size = 'Medium',
  textColor = 'White',
  ...rest
}: PropsButton) {
  return (
    <Styled.Button color={color} size={size} {...rest}>
      <Styled.TextButton textColor={textColor}>{children}</Styled.TextButton>
    </Styled.Button>
  );
}
