import React from 'react';
import * as Styled from './styles';

export default function AboutApp() {
  return (
    <Styled.Container>
      <Styled.Title>O que podemos oferecer?</Styled.Title>

      <Styled.ContainerItens>
        <Styled.BoxItens>
          <Styled.Icon />
          <Styled.ItemName>Armazenamento em nuvem</Styled.ItemName>
        </Styled.BoxItens>

        <Styled.BoxItens>
          <Styled.Icon />
          <Styled.ItemName>Armazenamento ilimitado</Styled.ItemName>
        </Styled.BoxItens>

        <Styled.BoxItens>
          <Styled.Icon />
          <Styled.ItemName>Agilidade </Styled.ItemName>
        </Styled.BoxItens>

        <Styled.BoxItens>
          <Styled.Icon />
          <Styled.ItemName>Interface clean</Styled.ItemName>
        </Styled.BoxItens>
      </Styled.ContainerItens>
    </Styled.Container>
  );
}
