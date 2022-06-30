import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import IlustrationLogin from '../../assets/ilustra2.svg';
import IconUser from '../../assets/icon-user.svg';
import IconMail from '../../assets/icon-mail.svg';
import IconLock from '../../assets/icon-lock.svg';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import ControlledInput from './../../components/ControlledInput';

import ButtonIcon from '../../components/ButtonIcon';
import { Alert, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { useForm } from 'react-hook-form';
import { ValidationForm } from '../../validations/FormData';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormData } from '../../@types/Form';
import uuid from 'react-native-uuid';
import * as Styled from './styles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Input } from '../../components/Input';

export default function RegisterMail() {
  const id = uuid.v4();
  const navigation = useNavigation();

  const [data, setData] = useState({
    id,
    name: '',
    email: '',
    password: '',
    password_confirm: '',
  } as FormData);

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({
  //   resolver: yupResolver(ValidationForm),
  // });
  const { getItem, setItem } = useAsyncStorage('@passnotes:userRegister');

  async function handleUserRegister() {
    try {
      if (
        data.name === '' ||
        data.email === '' ||
        data.password === '' ||
        data.password_confirm === ''
      ) {
        Alert.alert('Preencha todos os campos');
        return;
      } else {
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];

        const newData = [...previousData, data];
        await setItem(JSON.stringify(newData));
        Alert.alert('Cadastro realizado com sucesso!');
        navigation.navigate('LoginMail');
      }
    } catch (error) {
      Alert.alert('Erro ao cadastrar usuário');
    }
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor="#1971C2" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 420,
          flexGrow: 1,
        }}>
        <Styled.Container>
          <Styled.ContainerContent>
            <Styled.ContainerInfo>
              <Styled.ButtonGoback onPress={() => navigation.goBack()}>
                <IconArrowLeft width={15} height={15} />
              </Styled.ButtonGoback>

              <Styled.BoxText>
                <Styled.TitleBox>
                  Olá, Cadastre-se para começarmos
                </Styled.TitleBox>
              </Styled.BoxText>
            </Styled.ContainerInfo>
            <Styled.ContainerLogo>
              <IlustrationLogin width={195} height={233} />
            </Styled.ContainerLogo>
          </Styled.ContainerContent>

          <Styled.ContainerForm>
            <Input
              value={data.name}
              icon={<IconUser width={20} height={21} />}
              placeholder="Digite seu nome"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setData({ ...data, name: text })}
            />

            <Input
              value={data.email}
              icon={<IconMail width={20} height={21} />}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setData({ ...data, email: text })}
            />

            <Input
              value={data.password}
              icon={<IconLock width={20} height={21} />}
              placeholder="Digite sua senha"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setData({ ...data, password: text })}
            />

            <Input
              value={data.password_confirm}
              icon={<IconLock width={20} height={21} />}
              placeholder="Confirme sua senha"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text =>
                setData({ ...data, password_confirm: text })
              }
            />

            <Styled.SingInContainer>
              <Styled.SingInText>Cadastre-se</Styled.SingInText>

              <ButtonIcon
                icon={<IconArrowRight fill="#F8F9FA" width={15} height={20} />}
                color="Blue"
                format="square"
                onPress={() => handleUserRegister()}
              />
            </Styled.SingInContainer>

            <Styled.LinkRegister>
              <Styled.ButtonLink
                onPress={() => navigation.navigate('LoginMail')}>
                <Styled.TextLink>Já possuo uma conta</Styled.TextLink>
              </Styled.ButtonLink>
            </Styled.LinkRegister>
          </Styled.ContainerForm>
        </Styled.Container>
      </ScrollView>
    </SafeAreaView>
  );
}
