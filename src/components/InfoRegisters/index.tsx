import React from 'react';
import IconSecure from '../../assets/icon-security_pass.svg';
import * as Styled from './styles';

type Props = {
  count: any;
};

export default function InfoRegisters({count}: Props) {
  return (
    <Styled.Container>
      <Styled.ContentArea>
        <Styled.Title>Total de senhas registradas</Styled.Title>
      </Styled.ContentArea>
      <Styled.Content>
        <Styled.Number>{count ? count : 0}</Styled.Number>
        <Styled.Icon>
          <IconSecure width={85} height={85} />
        </Styled.Icon>
      </Styled.Content>
    </Styled.Container>
  );
}
