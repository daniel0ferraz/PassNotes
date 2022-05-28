import React from 'react';
import { useNavigation } from '@react-navigation/native';
import IlustrationLogin from '../../assets/ilustra2.svg';
import IconUser from '../../assets/icon-user.svg';
import IconMail from '../../assets/icon-mail.svg';
import IconLock from '../../assets/icon-lock.svg';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import * as Styled from './styles';
import { Input } from '../../components/Input';
import ButtonIcon from '../../components/ButtonIcon';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

export default function RegisterMail() {
  const navigation = useNavigation();
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
              icon={<IconUser width={20} height={21} />}
              placeholder="Digite seu nome"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              icon={<IconMail width={20} height={21} />}
              placeholder="Digite seu e-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              icon={<IconLock width={20} height={21} />}
              placeholder="Digite sua senha"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Styled.SingInContainer>
              <Styled.SingInText>Cadastre-se</Styled.SingInText>

              <ButtonIcon
                icon={<IconArrowRight fill="#F8F9FA" width={15} height={20} />}
                color="Blue"
                format="square"
                onPress={() => console.log('login')}
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
