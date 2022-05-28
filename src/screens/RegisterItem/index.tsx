import React, { useState } from 'react';

import { View, SafeAreaView, StatusBar, ScrollView, Alrt } from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import { useNavigation } from '@react-navigation/native';
import InputField from './../../components/InputField';
import Button from '../../components/Button';
import * as Styled from './styles';
import InputInfo from '../../components/InputInfo';
import InputInfo2 from '../../components/InputInfo2';

export default function RegisterItem() {
  const navigation = useNavigation();

  const [data, setData] = useState({
    logo: '',
    url: '',
    login: '',
    password: '',
  });

  function handleSubmit(data) {
    if (data.site === '' || data.password === '') {
      return;
    } else {
      console.log(data);
    }
  }

  function handleClear() {
    setData({
      logo: '',
      url: '',
      login: '',
      password: '',
    });
  }
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
        <Styled.Header>
          <Styled.HeaderInfo>
            <View>
              <Styled.BoxUser>
                <Styled.IconUser />
                <Styled.Info>Olá,</Styled.Info>
                <Styled.InfoName>Daniel</Styled.InfoName>
              </Styled.BoxUser>
            </View>

            <View>
              <Styled.SingOut onPress={() => navigation.goBack()}>
                <IconArrowLeft width={15} height={15} />
              </Styled.SingOut>
            </View>
          </Styled.HeaderInfo>

          <Styled.ContentForm>
            <Styled.InputFieldContainer>
              <InputInfo
                placeholder="Digite o nome do site"
                value={data.logo}
                onChangeText={text => setData({ ...data, logo: text })}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputInfo2
                placeholder="Digite a url do site"
                value={data.url}
                onChangeText={text => setData({ ...data, url: text })}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputField
                placeholder="Digite seu login de acesso "
                value={data.login}
                onChangeText={text => setData({ ...data, login: text })}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputField
                placeholder="Digite a senha"
                value={data.password}
                onChangeText={text => setData({ ...data, password: text })}
              />
            </Styled.InputFieldContainer>

            <Styled.ButtonContainer>
              <Button size="Medium" onPress={() => handleSubmit(data)}>
                Salvar
              </Button>
              <Button size="Medium" onPress={handleClear}>
                Excluir
              </Button>
            </Styled.ButtonContainer>
          </Styled.ContentForm>
        </Styled.Header>
      </ScrollView>
    </SafeAreaView>
  );
}
