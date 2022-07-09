import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import IconCheck from '../../../assets/Onboarding/icon-check.svg';
import * as Styled from './styles';

export default function AboutApp() {
  return (
    <Styled.Content>
      <View>
        <Header icon="Icon04" iconWidth={338} iconHeigth={359} />
      </View>
      <Styled.Container>
        <Styled.Title>O que podemos oferecer?</Styled.Title>

        <Styled.ContainerItens>
          <Styled.BoxItens>
            <Styled.Icon>
              <IconCheck width={13} height={13} />
            </Styled.Icon>
            <Styled.ItemName>Armazenamento em nuvem</Styled.ItemName>
          </Styled.BoxItens>

          <Styled.BoxItens>
            <Styled.Icon>
              <IconCheck width={13} height={13} />
            </Styled.Icon>
            <Styled.ItemName>Armazenamento ilimitado</Styled.ItemName>
          </Styled.BoxItens>

          <Styled.BoxItens>
            <Styled.Icon>
              <IconCheck width={13} height={13} />
            </Styled.Icon>
            <Styled.ItemName>Agilidade </Styled.ItemName>
          </Styled.BoxItens>

          <Styled.BoxItens>
            <Styled.Icon>
              <IconCheck width={13} height={13} />
            </Styled.Icon>
            <Styled.ItemName>Interface clean</Styled.ItemName>
          </Styled.BoxItens>
        </Styled.ContainerItens>
      </Styled.Container>
    </Styled.Content>
  );
}
