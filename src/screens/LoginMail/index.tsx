import React from 'react';

import { View } from 'react-native';

import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import IlustrationLogin from '../../assets/ilustration-login.svg';
import ButtonIcon from '../../components/ButtonIcon';
import * as Styled from './styles';
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
      </Styled.ContainerForm>
    </Styled.Container>
  );
}
