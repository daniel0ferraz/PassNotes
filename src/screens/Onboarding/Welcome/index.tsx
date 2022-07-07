import React from 'react';
import Button from '../../../components/Button';
import * as Styled from './styles';

export default function Welcome() {
  return (
    <Styled.Container>
      <Styled.ContainerInfo>
        <Styled.Title>Bem-vindo!</Styled.Title>
        <Styled.Subtitle>
          Aproveite nossos serviços e mude a forma que você lida com suas contas
        </Styled.Subtitle>
      </Styled.ContainerInfo>

      <Styled.ContainerButtons>
        <Button
          color="Blue"
          style={{ width: 327, height: 48, marginBottom: 16 }}
          onPress={() => console.log('login')}>
          Login
        </Button>

        <Button
          color="Blue100"
          textColor="Bluetxt"
          style={{ width: 327, height: 48 }}
          onPress={() => console.log('cadastro')}>
          Cadastro
        </Button>
      </Styled.ContainerButtons>
    </Styled.Container>
  );
}
