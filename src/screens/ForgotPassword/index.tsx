import React, {useState} from 'react';

import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IlustrationLogin from '../../assets/Login/forgot-pass.svg';
import Button from '../../components/Button';
import IconMail from '../../assets/icon-mail.svg';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, StatusBar} from 'react-native';
import {FormData} from '../../@types/Form';

import * as Styled from './styles';

import {Alert} from 'react-native';
import {Input} from '../../components/Input';
import {firebase} from '@react-native-firebase/auth';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
  } as FormData);

  function handleUserRegister() {
    setLoading(true);
    firebase
      .auth()
      .sendPasswordResetEmail(data.email)
      .then(() => {
        Alert.alert('Email enviado com sucesso!');
      })
      .catch(error => {
        Alert.alert('Ocorreu um erro ao enviar o email!');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#1C7ED6" />
      <ScrollView
        decelerationRate={'normal'}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 450,
          flexGrow: 1,
        }}>
        <Styled.Container>
          <Styled.ContainerContent>
            <Styled.ButtonGoback onPress={() => navigation.goBack()}>
              <IconArrowLeft width={15} height={15} />
            </Styled.ButtonGoback>
          </Styled.ContainerContent>

          <Styled.ContainerLogo>
            <IlustrationLogin width={194} height={317} />
          </Styled.ContainerLogo>

          <Styled.ContainerForm>
            <Styled.SingInContainer>
              <Styled.SingInLegend>
                Não se preocupe. Por favor insira o email cadastrado na sua
                conta.
              </Styled.SingInLegend>
            </Styled.SingInContainer>

            <Styled.ContentInput>
              <Input
                value={data.email}
                icon={<IconMail width={20} height={21} />}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={text => setData({...data, email: text})}
              />
            </Styled.ContentInput>

            <Styled.LinkRegister>
              <Button
                color="Blue"
                isLoading={loading}
                style={{width: '100%', height: 48, marginBottom: 16}}
                onPress={() => handleUserRegister()}>
                Enviar
              </Button>
            </Styled.LinkRegister>
          </Styled.ContainerForm>
        </Styled.Container>
      </ScrollView>
    </>
  );
}
