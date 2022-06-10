import React from 'react';

import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IlustrationLogin from '../../assets/ilustration-esqueci-senha.svg';
import Button from '../../components/Button';
import IconMail from '../../assets/icon-mail.svg';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { FormData } from '../../@types/Form';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import ControlledInput from '../../components/ControlledInput';
import { ValidationForm } from '../../validations/FormData';
import * as Styled from './styles';

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
            <IlustrationLogin width={380} height={252} />
          </Styled.ContainerLogo>
        </Styled.ContainerContent>

        <Styled.ContainerForm>
          <Styled.SingInContainer>
            <Styled.SingInText>Esqueceu a senha? </Styled.SingInText>
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
              textColor="Bluetxt"
              color="Blue100"
              onPress={() => navigation.goBack()}>
              Voltar
            </Button>
            <Button onPress={() => handleSubmit(handleUserRegister)}>
              Enviar
            </Button>
          </Styled.LinkRegister>
        </Styled.ContainerForm>
      </Styled.Container>
    </>
  );
}
