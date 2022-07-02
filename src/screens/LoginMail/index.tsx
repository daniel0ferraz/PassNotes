import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import IlustrationLogin from '../../assets/ilustration-login.svg';
import IconMail from '../../assets/icon-mail.svg';
import IconLock from '../../assets/icon-lock.svg';
import ButtonIcon from '../../components/ButtonIcon';
import ControlledInput from '../../components/ControlledInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { ValidationForm } from '../../validations/LoginMail';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData } from '../../@types/Form';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as Styled from './styles';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';

export default function LoginMail() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [dataUser, setdataUser] = useState({});

  const { getItem } = useAsyncStorage('@passnotes:userRegister');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(ValidationForm),
  });

  async function checkLogin() {
    const user = await AsyncStorage.getItem('@passnotes:userlogued');

    if (user) {
      navigation.replace('Home');
      // console.log(user);
    }
  }

  async function handleLogin(data: FormData) {
    try {
      const response = await getItem();
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const dataUser = response ? JSON.parse(response) : [];
      setdataUser(dataUser);

      if (!response) {
        Alert.alert('Erro', 'Não foi possível encontrar o usuário');
        return;
      }

      // console.log('response:', response);

      // if (
      //   data.email === dataUser.email &&
      //   data.password === dataUser.password
      // ) {
      //   console.log('Login realizado com sucesso!');
      //   navigation.replace('Home');
      //   await AsyncStorage.setItem(
      //     '@passnotes:userlogued',
      //     JSON.stringify(dataUser)
      //   );
      //   return;
      // } else {
      //   Alert.alert('Erro', 'Email ou senha incorretos!');
      //   return false;
      // }

      const userVerified = dataUser.find((logued: any) => {
        if (logued.email === data.email && logued.password === data.password) {
          console.log('Login realizado com sucesso!');
          navigation.replace('Home');
          return true;
        } else {
          Alert.alert('Erro', 'Email ou senha incorretos!');
          return null;
        }
      });

      if (userVerified) {
        await AsyncStorage.setItem(
          '@passnotes:userlogued',
          JSON.stringify(dataUser)
        );
        navigation.replace('Home');
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

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
            <Styled.ContainerInfo>
              <Styled.ButtonGoback onPress={() => navigation.goBack()}>
                <IconArrowLeft width={15} height={15} />
              </Styled.ButtonGoback>

              <Styled.BoxText>
                <Styled.TitleBox>Olá, seja bem-vindo!</Styled.TitleBox>
              </Styled.BoxText>

              <Styled.BoxLegend>
                <Styled.LegendText>
                  Estavamos com saudades de você
                </Styled.LegendText>
              </Styled.BoxLegend>
            </Styled.ContainerInfo>
            <Styled.ContainerLogo>
              <IlustrationLogin width={326} height={270} />
            </Styled.ContainerLogo>
          </Styled.ContainerContent>

          <Styled.ContainerForm>
            <Styled.ContentInput>
              <ControlledInput
                name="email"
                control={control}
                icon={<IconMail width={20} height={21} />}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.email}
              />

              <ControlledInput
                name="password"
                control={control}
                icon={<IconLock width={20} height={21} />}
                placeholder="Digite sua senha"
                keyboardType="email-address"
                autoCapitalize="none"
                error={errors.password}
              />
            </Styled.ContentInput>

            <Styled.SingInContainer>
              <Styled.SingInText>Login</Styled.SingInText>

              <ButtonIcon
                icon={<IconArrowRight fill="#F8F9FA" width={15} height={20} />}
                color="Blue"
                format="square"
                onPress={handleSubmit(handleLogin)}
              />
            </Styled.SingInContainer>
            <Styled.LinkRegister>
              <Styled.ButtonLink
                onPress={() => navigation.navigate('RegisterMail')}>
                <Styled.TextLink>Cadastrar-se</Styled.TextLink>
              </Styled.ButtonLink>

              <Styled.ButtonLink
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Styled.TextLink>Esqueci a senha</Styled.TextLink>
              </Styled.ButtonLink>
            </Styled.LinkRegister>
          </Styled.ContainerForm>
        </Styled.Container>
      </ScrollView>
    </SafeAreaView>
  );
}
