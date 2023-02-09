import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import Login from '../../assets/Login/login.svg';
import IconMail from '../../assets/icon-mail.svg';
import IconLock from '../../assets/icon-lock.svg';
import IconGoogle from '../../assets/icon-google.svg';
import ButtonIcon from '../../components/ButtonIcon';
import ControlledInput from '../../components/ControlledInput';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {ValidationForm} from '../../validations/LoginMail';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormData} from '../../@types/Form';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import * as Styled from './styles';
import ButtonSocial from '../../components/ButtonSocial';
import {Input} from '../../components/Input';
import Loader from '../../components/Loader';
import auth from '@react-native-firebase/auth';

export default function LoginMail() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [dataUser, setdataUser] = useState({
    email: '',
    password: '',
  } as FormData);
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    setLoading(true);
    const singIn = auth()
      .signInWithEmailAndPassword(dataUser.email, dataUser.password)
      .then(res => {
        setLoading(false);
        console.log('Login com sucesso:', res);
      })
      .catch(error => {
        setLoading(false);
        Alert.alert('Error', error.message, [
          {
            text: 'OK',
            onPress: () => {
              setLoading(false);
            },
          },
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor="#1971C2" />
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
            <Login width={194} height={317} />
          </Styled.ContainerLogo>

          <Styled.ContainerForm>
            <Styled.ContentInput>
              <Input
                value={dataUser.email}
                icon={<IconMail width={20} height={21} />}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={text => setdataUser({...dataUser, email: text})}
              />

              <Input
                value={dataUser.password}
                icon={<IconLock width={20} height={21} />}
                placeholder="Digite sua senha"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={text =>
                  setdataUser({...dataUser, password: text})
                }
                secureTextEntry={true}
              />
            </Styled.ContentInput>
            {/* 
            <View style={{marginBottom: 10}}>
              <ButtonSocial
                onPress={() => console.log('google')}
                icon={<IconGoogle width={23} height={23} />}>
                Entrar com o Google
              </ButtonSocial>
            </View> */}

            <Styled.SingInContainer>
              <Styled.SingInText>Login</Styled.SingInText>

              <ButtonIcon
                icon={<IconArrowRight fill="#F8F9FA" width={15} height={20} />}
                color="Blue"
                format="square"
                isLoading={loading}
                onPress={() => handleLogin()}
                disabled={!dataUser.email && !dataUser.password}
              />
            </Styled.SingInContainer>

            <Styled.LinkRegister>
              <Styled.ButtonLink
                onPress={() => navigation.navigate('RegisterMail')}>
                <Styled.TextLink>Cadastrar-se</Styled.TextLink>
              </Styled.ButtonLink>

              <Styled.ButtonLink
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Styled.TextLink>Esqueci minha senha</Styled.TextLink>
              </Styled.ButtonLink>
            </Styled.LinkRegister>
          </Styled.ContainerForm>
        </Styled.Container>
      </ScrollView>
    </SafeAreaView>
  );
}
