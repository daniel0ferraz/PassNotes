import React, { useEffect, useState } from 'react';

import { View, SafeAreaView, StatusBar, Alert } from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import { useNavigation } from '@react-navigation/native';
import InputField from './../../components/InputField';
import Button from '../../components/Button';
import InputInfo from '../../components/InputInfo';
import InputInfo2 from '../../components/InputInfo2';
import { getLogo } from '../../components/InputInfo/logo';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import PopUp from '../../components/PopUp';
import { messages } from '../../components/PopUp/Messages';
import uuid from 'react-native-uuid';
import { PropsCard } from '../../@types/Card';

import * as Styled from './styles';

export default function RegisterItem() {
  const id = uuid.v4();
  const navigation = useNavigation();
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

  const handleClear = () => {
    return setData({
      id: '',
      logo: '',
      url: '',
      login: '',
      password: '',
    } as PropsCard);
  };

  async function handleSubmit() {
    try {
      if (
        data.id === '' ||
        data.url === '' ||
        data.password === '' ||
        data.login === '' ||
        data.logo === ''
      ) {
        setAlert(true);
        return;
      } else {
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];

        const newData = [...previousData, data];
        await setItem(JSON.stringify(newData));

        setSuccess(true);
        handleClear();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (icon === false) {
      setIcon({ icon: true });
    }
  }, [icon]);

  console.log('Icon:', icon);
  console.log('Data.Logo:', data.logo);
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
                <Styled.InfoName />
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
                value={data.logo.trim()}
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
    </>
  );
}
