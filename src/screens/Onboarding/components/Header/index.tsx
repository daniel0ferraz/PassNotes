import React from 'react';
import * as Styled from './styles';

type PropsHeader = {
  icon?: string;
  iconSize?: number;
};

export default function Header({ icon, iconSize }: PropsHeader) {
  return (
    <Styled.Container>
      <Styled.Icon>
        {icon} {iconSize}
      </Styled.Icon>
    </Styled.Container>
  );
}
