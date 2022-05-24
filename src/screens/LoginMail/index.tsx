import React from 'react';

import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import IlustrationLogin from '../../assets/ilustration-login.svg';
import IconFaceBook from '../../assets/icon-facebook.svg';
import IconGoogle from '../../assets/icon-google.svg';
import IconMail from '../../assets/icon-email.svg';

import ButtonIcon from '../../components/ButtonIcon';
import ButtonSocial from '../../components/ButtonSocial';
import * as Styled from './styles';
import { Input } from '../../components/InputField';
export default function LoginMail() {
  return (
    <Styled.Container>
      <Styled.ContainerContent>
        <Styled.ContainerInfo>
          <Styled.ButtonGoback>
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

        <IlustrationLogin width={326} height={270} />
      </Styled.ContainerContent>

      <Styled.ContainerForm>
        <Styled.SingInContainer>
          <Styled.SingInText>Login</Styled.SingInText>

          <ButtonIcon
            icon={<IconArrowRight fill="#F8F9FA" width={15} height={20} />}
            color="Blue"
            format="square"
            onPress={() => console.log('login')}
          />
        </Styled.SingInContainer>

        <Styled.LinkRegister>
          <Styled.ButtonLink>
            <Styled.TextLink>Cadastrar-se</Styled.TextLink>
          </Styled.ButtonLink>

          <Styled.ButtonLink>
            <Styled.TextLink>Esqueci a senha</Styled.TextLink>
          </Styled.ButtonLink>
        </Styled.LinkRegister>

        <Input
          icon={<IconMail width={23} height={23} />}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input icon="lock" placeholder="Senha" secureTextEntry />
        {/* <ButtonSocial
          onPress={() => console.log('facebook')}
          icon={<IconFaceBook width={23} height={23} />}>
          Entrar com o Facebook
        </ButtonSocial>

        <ButtonSocial
          onPress={() => console.log('google')}
          icon={<IconGoogle width={23} height={23} />}>
          Entrar com o Google
        </ButtonSocial>

        <ButtonSocial
          onPress={() => console.log('email')}
          icon={<IconMail width={23} height={23} />}>
          Entrar com o e-mail
        </ButtonSocial> */}
      </Styled.ContainerForm>
    </Styled.Container>
  );
}
