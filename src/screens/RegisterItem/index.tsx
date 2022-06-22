import React, { useEffect, useState } from 'react';

import { View, SafeAreaView, StatusBar, Alert } from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import { useNavigation } from '@react-navigation/native';
import InputField from './../../components/InputField';
import Button from '../../components/Button';
import InputInfo from '../../components/InputInfo';
import InputInfo2 from '../../components/InputInfo2';
import { getLogo } from '../../components/InputInfo/logo';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { PropsCard } from '../../@types/Card';

import * as Styled from './styles';
import PopUp from '../../components/PopUp';

export default function RegisterItem() {
  const navigation = useNavigation();

  const id = uuid.v4();
  const [icon, setIcon] = useState({ icon: false });
  const [data, setData] = useState({
    id,
    logo: '',
    url: '',
    login: '',
    password: '',
  } as PropsCard);

  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  const { getItem, setItem } = useAsyncStorage('@passnotes:passwords');

  async function handleSubmit() {
    try {
      if (
        data.id === '' ||
        data.url === '' ||
        data.password === '' ||
        data.login === '' ||
        data.logo === ''
      ) {
        setError(true);
        return;
      } else {
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];

        const newData = [...previousData, data];
        await setItem(JSON.stringify(newData));

        setSucess(!sucess);
        handleClear();
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
      setError(!error);
    }
  }

  function handleClear() {
    setData({
      id: '',
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
                onChangeText={(text: string) => {
                  setData({ ...data, logo: text });
                  setIcon(getLogo(text));
                }}
                icon={icon?.icon}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputInfo2
                placeholder="Digite a url do site"
                autoCapitalize="none"
                keyboardType="web-search"
                value={data.url}
                onChangeText={text => setData({ ...data, url: text })}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputField
                placeholder="Digite seu login de acesso "
                autoCapitalize="none"
                keyboardType="email-address"
                value={data.login}
                onChangeText={text => setData({ ...data, login: text })}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputField
                placeholder="Digite a senha"
                autoCapitalize="none"
                value={data.password}
                onChangeText={text => setData({ ...data, password: text })}
              />
            </Styled.InputFieldContainer>

            <Styled.ButtonContainer>
              <Button size="Medium" onPress={() => handleSubmit()}>
                Salvar
              </Button>
              <Button size="Medium" onPress={() => handleClear()}>
                Excluir
              </Button>
            </Styled.ButtonContainer>
          </Styled.ContentForm>
          {sucess && (
            <Styled.Alert>
              <PopUp title="Senha registrada com sucesso!" alert="success" />
            </Styled.Alert>
          )}
          {error && (
            <Styled.Alert>
              <PopUp title="Você deve preencher todos os dados" alert="alert" />
            </Styled.Alert>
          )}
        </Styled.Header>
      </SafeAreaView>
    </>
  );
}
