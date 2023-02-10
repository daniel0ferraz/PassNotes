import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import IconSuccessPass from '../../assets/Login/forgot-pass-success.svg';
import Button from '../../components/Button';
import * as Styled from './styles';

export default function ForgotPassSucess() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <StatusBar barStyle={'light-content'} backgroundColor="#228BE6" />
      <Styled.Container>
        <Styled.BoxLogo>
          <IconSuccessPass width={154.81} height={169} />
        </Styled.BoxLogo>

        <Styled.BoxText>
          <Styled.TextInfo>Nova senha criada com sucesso!</Styled.TextInfo>
        </Styled.BoxText>

        <Styled.BoxMessage>
          <Styled.Message>
            Deu certo! Agora com a nova senha você já pode acessar o aplicativo
            novamente, bora lá?
          </Styled.Message>
        </Styled.BoxMessage>

        <Styled.ContainerButton>
          <Button
            style={{width: '100%'}}
            size="Medium"
            onPress={() => {
              navigation.navigate('LoginMail');
            }}>
            Login
          </Button>
        </Styled.ContainerButton>
      </Styled.Container>
    </KeyboardAvoidingView>
  );
}
