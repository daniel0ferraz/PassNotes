import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import IconArrowRight from '../../assets/icon-arrowRight.svg';
import IlustrationLogin from '../../assets/ilustration-login.svg';
import IconMail from '../../assets/icon-mail.svg';
import IconLock from '../../assets/icon-lock.svg';
import ButtonIcon from '../../components/ButtonIcon';
import ControlledInput from '../../components/ControlledInput';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Styled from './styles';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function LoginMail() {
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
        decelerationRate={'normal'}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 450,
          flexGrow: 1,
        }}>
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
                icon={<IconLock width={16} height={21} />}
                placeholder="Digite sua senha"
                keyboardType="visible-password"
                secureTextEntry
                error={errors.password}
              />
            </Styled.ContentInput>

            <Styled.SingInContainer>
              <Styled.SingInText>Login</Styled.SingInText>

              <ButtonIcon
                icon={<IconArrowRight fill="#F8F9FA" width={15} height={20} />}
                color="Blue"
                format="square"
                onPress={() => navigation.navigate('Home')}
                // onPress={handleSubmit(handleUserRegister)}
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
      </ScrollView>
    </SafeAreaView>
  );
}
