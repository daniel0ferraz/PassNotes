import React, { useState } from 'react';

import { View, SafeAreaView, StatusBar, ScrollView, Alert } from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import InputField from './../../components/InputField';
import Button from '../../components/Button';
import InputInfo from '../../components/InputInfo';
import InputInfo2 from '../../components/InputInfo2';
import { getLogo } from '../../components/InputInfo/logo';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { PropsCard } from '../../@types/Card';

import * as Styled from './styles';

export default function RegisterItem() {
  const navigation = useNavigation();
  const route = useRoute();

  const itens = route.params as PropsCard;

  console.log('itens:', itens);

  const id = uuid.v4();
  const [icon, setIcon] = useState({ icon: false });
  const [data, setData] = useState({
    id,
    logo: '',
    url: '',
    login: '',
    password: '',
  } as PropsCard);

  const { getItem, setItem } = useAsyncStorage('@passnotes:passwords');

  async function handleSubmit() {
    // if (data.site === '' || data.password === '') {
    //   return;
    // } else {
    //   console.log(data);
    // }
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const newData = [...previousData, data];
    await setItem(JSON.stringify(newData));
    Alert.alert('Cadastro realizado com sucesso!');
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function handleRemove(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    handleClear();
    const newData = previousData.filter(itens => itens.id !== id);
    await setItem(JSON.stringify(newData));
    setData(data);
  }

  function handleClear() {
    setData({
      logo: '',
      url: '',
      login: '',
      password: '',
    } as PropsCard);
  }
  return (
    <>
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
                  value={data.logo || itens?.logo}
                  onChangeText={(text: string) => {
                    setData({ ...data, logo: text });
                    setIcon(getLogo(text || itens?.logo));
                  }}
                  icon={icon?.icon || itens?.logo}
                />
              </Styled.InputFieldContainer>

              <Styled.InputFieldContainer>
                <InputInfo2
                  placeholder="Digite a url do site"
                  autoCapitalize="none"
                  keyboardType="web-search"
                  value={data.url || itens?.url}
                  onChangeText={text => setData({ ...data, url: text })}
                />
              </Styled.InputFieldContainer>

              <Styled.InputFieldContainer>
                <InputField
                  placeholder="Digite seu login de acesso "
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={data.login || itens?.login}
                  onChangeText={text => setData({ ...data, login: text })}
                />
              </Styled.InputFieldContainer>

              <Styled.InputFieldContainer>
                <InputField
                  placeholder="Digite a senha"
                  autoCapitalize="none"
                  value={data.password || itens?.password}
                  onChangeText={text => setData({ ...data, password: text })}
                />
              </Styled.InputFieldContainer>

              <Styled.ButtonContainer>
                <Button
                  size="Medium"
                  onPress={() => {
                    handleSubmit();
                  }}>
                  Salvar
                </Button>
                <Button
                  size="Medium"
                  onPress={() => {
                    // handleClear();
                    handleRemove(itens?.id);
                  }}>
                  Excluir
                </Button>
              </Styled.ButtonContainer>
            </Styled.ContentForm>
          </Styled.Header>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
