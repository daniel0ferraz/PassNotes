import React from 'react';
import { useNavigation } from '@react-navigation/native';
import IlustrationLogin from '../../assets/ilustra2.svg';
import IconUser from '../../assets/icon-user.svg';
import IconMail from '../../assets/icon-mail.svg';
import IconLock from '../../assets/icon-lock.svg';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import ControlledInput from './../../components/ControlledInput';

import ButtonIcon from '../../components/ButtonIcon';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Styled from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
  password_confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
});

export default function RegisterMail() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function handleUserRegister(data: FormData) {
    if (data) {
      navigation.navigate('Home');
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
            <ControlledInput
              name="name"
              control={control}
              icon={<IconUser width={20} height={21} />}
              placeholder="Digite seu nome"
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.name}
            />

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

            <ControlledInput
              name="password_confirm"
              control={control}
              icon={<IconLock width={20} height={21} />}
              placeholder="Confirme sua senha"
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.password_confirm}
            />

            <Styled.SingInContainer>
              <Styled.SingInText>Cadastre-se</Styled.SingInText>

              <ButtonIcon
                icon={<IconArrowRight fill="#F8F9FA" width={15} height={20} />}
                color="Blue"
                format="square"
                onPress={handleSubmit(handleUserRegister)}
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
