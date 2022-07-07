import React from 'react';
import Header from '../components/Header';
import * as Styled from './styles';

export default function About() {
  return (
    <>
      <Styled.Container>
        <Header />
        <Styled.Title>Afinal, para que serve o PassNotes?</Styled.Title>
        <Styled.Subtitle>
          Criamos um aplicativo para você armazenar suas senhas mais importantes
          em um só lugar.
        </Styled.Subtitle>
        <Styled.SubtitleInfo>
          Todas suas senhas são armazenadas em nuvem. Não esqueça que este é um
          projeto de estudo não um produto real.
        </Styled.SubtitleInfo>
      </Styled.Container>
    </>
  );
}
