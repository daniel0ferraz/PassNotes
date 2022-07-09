import React from 'react';

import Icon03 from '../../../../assets/ilustration-register.svg';
import * as Styled from './styles';

type PropsHeader = {
  icon?: string;
  iconHeigth?: number;
  iconWidth?: number;
};

export default function Header({ icon, iconHeigth, iconWidth }: PropsHeader) {
  // funcao que retorna icones de acordo com o parametro passado
  const IconHeader = () => {
    switch (icon) {
      case 'Icon03':
        return <Icon03 width={iconHeigth} height={iconWidth} />;

      default:
        return '';
    }
  };

  return (
    <Styled.Container>
      <Styled.Icon>{IconHeader()}</Styled.Icon>
    </Styled.Container>
  );
}
