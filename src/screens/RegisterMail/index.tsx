import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import IlustrationLogin from '../../assets/ilustra2.svg';
import IconUser from '../../assets/icon-user_gray.svg';
import IconMail from '../../assets/icon-mail.svg';
import IconLock from '../../assets/icon-lock.svg';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import ControlledInput from './../../components/ControlledInput';

import ButtonIcon from '../../components/ButtonIcon';
import {Alert, SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import {ValidationForm} from '../../validations/FormData';
import {yupResolver} from '@hookform/resolvers/yup';
import {FormData} from '../../@types/Form';

import * as Styled from './styles';

import {Input} from '../../components/Input';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from './components/Header';
import Button from './../../components/Button';
import ForgotPassSucess from '../ForgotPassSucess';
import {firebase} from '@react-native-firebase/auth';

export default function RegisterMail() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  } as FormData);

  async function handleUserRegister() {
    try {
      if (data.name === '' || data.email === '' || data.password === '') {
        Alert.alert('Preencha todos os campos');
        return;
      }
      if (data.password !== data.password_confirm) {
        Alert.alert('As senhas não conferem');
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(user => {
          if (user) {
            user.user.updateProfile({
              displayName: data.name,
            });
          }
        });
    } catch (error) {
      Alert.alert('Erro ao cadastrar usuário');
    }
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor="#228BE6" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 420,
          flexGrow: 1,
        }}>
        <>
          <Styled.ContainerContent>
            <Header title="Olá, cadastre-se para começar" />
          </Styled.ContainerContent>

          <Styled.ContainerForm>
            <Input
              value={data.name}
              icon={<IconUser width={20} height={21} />}
              placeholder="Digite seu nome"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setData({...data, name: text})}
            />

            <Input
              value={data.email}
              icon={<IconMail width={20} height={21} />}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setData({...data, email: text})}
            />

            <Input
              value={data.password}
              icon={<IconLock width={20} height={21} />}
              placeholder="Digite sua senha"
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={text => setData({...data, password: text})}
            />

            <Styled.BoxButtom>
              <Button
                style={{width: 326, height: 48}}
                onPress={handleUserRegister}>
                Cadastrar
              </Button>
            </Styled.BoxButtom>
          </Styled.ContainerForm>
        </>
      </ScrollView>
    </SafeAreaView>
  );
}
