import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Button from '../../../components/Button';
import Header from '../components/Header';
import * as Styled from './styles';
import RegisterMail from './../../RegisterMail/index';
import LoginMail from './../../LoginMail/index';

export default function Welcome() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Styled.Content>
      <View>
        <Header icon="Icon05" iconWidth={315.56} iconHeigth={327.19} />
      </View>
      <Styled.Container>
        <Styled.ContainerInfo>
          <Styled.Title>Bem-vindo!</Styled.Title>
          <Styled.Subtitle>
            Aproveite nossos serviços e mude a forma que você lida com suas
            contas
          </Styled.Subtitle>
        </Styled.ContainerInfo>

        <Styled.ContainerButtons>
          <Button
            color="Blue"
            style={{ width: 327, height: 48, marginBottom: 16 }}
            onPress={() => navigation.navigate('LoginMail')}>
            Login
          </Button>

          <Button
            color="Blue100"
            textColor="Bluetxt"
            style={{ width: 327, height: 48 }}
            onPress={() => navigation.navigate('RegisterMail')}>
            Cadastro
          </Button>
        </Styled.ContainerButtons>
      </Styled.Container>
    </Styled.Content>
  );
}
