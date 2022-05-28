import React from 'react';

import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IlustrationLogin from '../../assets/ilustration-esqueci-senha.svg';
import Button from '../../components/Button';
import IconMail from '../../assets/icon-mail.svg';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { Input } from '../../components/Input';
import { StatusBar } from 'react-native';

export default function ForgotPassword() {
  const navigation = useNavigation();
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
            <Input
              icon={<IconMail width={20} height={21} />}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Styled.ContentInput>
          <Styled.LinkRegister>
            <Button
              textColor="Bluetxt"
              color="Blue100"
              onPress={() => navigation.goBack()}>
              Voltar
            </Button>
            <Button>Enviar</Button>
          </Styled.LinkRegister>
        </Styled.ContainerForm>
      </Styled.Container>
    </>
  );
}
