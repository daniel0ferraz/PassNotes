/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import InputField from './../../components/InputField';
import Button from '../../components/Button';
import InputInfo from '../../components/InputInfo';
import InputInfoLogo from './InputInfoLogo';
import InputInfo2 from '../../components/InputInfo2';
import { getLogo } from '../../components/InputInfo/logo';
import PopUp from '../../components/PopUp';
import InfoHeader from './../../components/InfoHeader';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { PropsCard } from '../../@types/Card';
import * as Styled from './styles';
import { messages } from '../../components/PopUp/Messages';

export default function ViewItem() {
  const navigation = useNavigation();
  const route = useRoute();

  const itens = route.params as PropsCard;

  const id = uuid.v4();
  const [icon, setIcon] = useState({ icon: false });

  const [data, setData] = useState({
    id,
    logo: '',
    url: '',
    login: '',
    password: '',
  } as PropsCard);
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState(false);

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
        setSucess(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  async function handleRemove(id: string) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const newData = previousData.filter(itens => itens.id !== id);
    await setItem(JSON.stringify(newData));
    setData(data);
    navigation.goBack();
  }

  function handleClear() {
    setData({
      id: '',
      logo: '',
      url: '',
      login: '',
      password: '',
    });
    itens.logo = '';
    itens.url = '';
    itens.login = '';
    itens.password = '';
  }

  useEffect(() => {
    setIcon(getLogo(itens?.logo));
  }, [itens.logo]);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor="#1971C2" />
      <Styled.Header>
        <InfoHeader />

        <Styled.ContentForm>
          <Styled.InputFieldContainer>
            <InputInfoLogo
              placeholder="Digite o nome do site"
              editable={false}
              value={itens?.logo}
              onChangeText={(text: string) => {
                setData({ ...data, logo: text });
                setIcon(getLogo(itens?.logo));
              }}
              icon={itens?.logo}
            />
          </Styled.InputFieldContainer>

          <Styled.InputFieldContainer>
            <InputInfo2
              editable={false}
              placeholder="Digite a url do site"
              autoCapitalize="none"
              keyboardType="web-search"
              value={itens?.url}
              onChangeText={text => setData({ ...data, url: text })}
            />
          </Styled.InputFieldContainer>

          <Styled.InputFieldContainer>
            <InputField
              editable={false}
              placeholder="Digite seu login de acesso "
              autoCapitalize="none"
              keyboardType="email-address"
              value={itens?.login}
              onChangeText={text => setData({ ...data, login: text })}
              iconCopyPast={true}
            />
          </Styled.InputFieldContainer>

          <Styled.InputFieldContainer>
            <InputField
              editable={false}
              placeholder="Digite a senha"
              autoCapitalize="none"
              secureTextEntry
              value={itens?.password}
              onChangeText={text => setData({ ...data, password: text })}
              iconCopyPast={true}
              iconSec={true}
            />
          </Styled.InputFieldContainer>

          <Styled.ButtonContainer>
            <Button
              disabled
              size="Medium"
              onPress={() => {
                handleSubmit();
              }}>
              Salvar
            </Button>
            <Button
              size="Medium"
              onPress={() => {
                handleRemove(itens.id);
                handleClear();
              }}>
              Excluir
            </Button>
          </Styled.ButtonContainer>
        </Styled.ContentForm>
        <Styled.Alert>
          {alert && (
            <PopUp
              showAlert={alert}
              setShowAlert={setAlert}
              title={messages[0].message}
              alert={messages[0].type}
            />
          )}

          {success && (
            <PopUp
              showAlert={success}
              setShowAlert={setSuccess}
              title={messages[1].message}
              alert={messages[1].type}
            />
          )}
        </Styled.Alert>
      </Styled.Header>
    </SafeAreaView>
  );
}
