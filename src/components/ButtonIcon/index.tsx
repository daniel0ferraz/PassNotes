import React from 'react';

import * as Styled from './styles';

export type PropsBtnIcon = {
  onPress: () => void;
  color: 'Blue' | 'Blue600';
  icon?: any;
  format?: 'square' | 'round';
};

export default function ButtonIcon({
  icon,
  onPress,
  color = 'Blue',
  format = 'square',
}: PropsBtnIcon) {
  return (
    <Styled.BtnIcon onPress={onPress} color={color} format={format}>
      {icon && icon}
    </Styled.BtnIcon>
  );
}
