import React from 'react';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import IlustrationLogin from '../../assets/ilustration-login.svg';
import IconMail from '../../assets/icon-mail.svg';
import IconLock from '../../assets/icon-lock.svg';
import ButtonIcon from '../../components/ButtonIcon';
import { Input } from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';

export default function LoginMail() {
  const navigation = useNavigation();
  return (
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
          <Input
            icon={<IconMail width={20} height={21} />}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            icon={<IconLock width={16} height={21} />}
            placeholder="Digite sua senha"
            keyboardType="visible-password"
            secureTextEntry
          />
        </Styled.ContentInput>

        <Styled.SingInContainer>
          <Styled.SingInText>Login</Styled.SingInText>

          <ButtonIcon
            icon={<IconArrowRight fill="#F8F9FA" width={15} height={20} />}
            color="Blue"
            format="square"
            onPress={() => navigation.navigate('Home')}
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
  );
}
