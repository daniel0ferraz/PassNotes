import React from 'react';

import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IlustrationLogin from '../../assets/Login/forgot-pass.svg';
import Button from '../../components/Button';
import IconMail from '../../assets/icon-mail.svg';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { FormData } from '../../@types/Form';
import { useForm } from 'react-hook-form';

import ControlledInput from '../../components/ControlledInput';
import { ValidationForm } from '../../validations/FormData';
import * as Styled from './styles';
import { yupResolver } from '@hookform/resolvers/yup';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(ValidationForm),
  });

  function handleUserRegister(data: FormData) {
    if (data) {
      console.log(data);
    }
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#1C7ED6" />
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
              Não se preocupe. Por favor insira o email cadastrado na sua conta.
            </Styled.SingInLegend>
          </Styled.SingInContainer>

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
          </Styled.ContentInput>

          <Styled.LinkRegister>
            <Button
              color="Blue"
              style={{ width: '100%', height: 48, marginBottom: 16 }}
              onPress={() => console.log('enviar')}>
              Enviar
            </Button>
          </Styled.LinkRegister>
        </Styled.ContainerForm>
      </Styled.Container>
    </>
  );
}
