import React from 'react';
import IlustrationRegister from '../../assets/ilustration-register.svg';
import IconFaceBook from '../../assets/icon-facebook.svg';
import IconGoogle from '../../assets/icon-google.svg';
import IconMail from '../../assets/icon-email.svg';
import IconArrowDown from '../../assets/icon-arrowDown.svg';
import ButtonSocial from '../../components/ButtonSocial';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

export default function LoginHub() {
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
              <Styled.BoxText>
                <Styled.TitleBox>
                  Tenha sempre acesso facíl às suas senhas
                </Styled.TitleBox>
              </Styled.BoxText>

              <Styled.BoxLegend>
                <Styled.LegendText>Simples, rápido e fácil</Styled.LegendText>
              </Styled.BoxLegend>

              <Styled.BoxButton>
                <Styled.ButtonGoback>
                  <IconArrowDown width={20} height={18} />
                </Styled.ButtonGoback>
              </Styled.BoxButton>
            </Styled.ContainerInfo>

            <Styled.ContainerLogo>
              <IlustrationRegister width={280} height={245} />
            </Styled.ContainerLogo>
          </Styled.ContainerContent>

          <Styled.ContainerForm>
            <Styled.SingInContainer>
              <Styled.SingInText>Faça seu login</Styled.SingInText>
              <Styled.SingInLegend>
                com uma das contas a baixo
              </Styled.SingInLegend>
            </Styled.SingInContainer>

            <ButtonSocial
              onPress={() => navigation.navigate('LoginMail')}
              icon={<IconMail width={23} height={23} />}>
              Entrar com o e-mail
            </ButtonSocial>

            <ButtonSocial
              onPress={() => console.log('facebook')}
              icon={<IconFaceBook width={23} height={23} />}>
              Entrar com o Facebook
            </ButtonSocial>

            <ButtonSocial
              onPress={() => console.log('google')}
              icon={<IconGoogle width={23} height={23} />}>
              Entrar com o Google
            </ButtonSocial>
          </Styled.ContainerForm>
        </Styled.Container>
      </ScrollView>
    </SafeAreaView>
  );
}
