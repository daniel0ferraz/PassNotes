import React from 'react';
import * as Styled from './styles';

export type PropsButton = {
  children: React.ReactNode;
  onPress: () => void;
  color: 'Blue' | 'Blue600' | 'Blue100';
  size: 'Small' | 'Medium';
  textColor?: 'White' | 'Bluetxt';
};

export default function Button({
  children,
  onPress,
  color = 'Blue',
  size = 'Medium',
}: PropsButton) {
  return (
    <Styled.Button onPress={onPress} color={color} size={size}>
      <Styled.TextButton>{children}</Styled.TextButton>
    </Styled.Button>
  );
}
