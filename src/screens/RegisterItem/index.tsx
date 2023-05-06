import React, {useEffect, useState} from 'react';

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import InputField from './../../components/InputField';
import Button from '../../components/Button';
import InputInfo from '../../components/InputInfo';
import InputInfo2 from '../../components/InputInfo2';

import PopUp from '../../components/PopUp';
import {messages} from '../../components/PopUp/Messages';

import {PropsCard} from '../../@types/Card';

import * as Styled from './styles';

import {useNavigation, useRoute} from '@react-navigation/native';

import firestore, {firebase} from '@react-native-firebase/firestore';
import InfoHeader from '../../components/InfoHeader/index';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export default function RegisterItem() {
  const navigation = useNavigation();

  const route = useRoute();
  const itens = route.params as PropsCard;

  const dataUser = firebase.auth().currentUser as FirebaseAuthTypes.User;

  const [data, setData] = useState({
    nameSite: itens?.nameSite || '',
    url: itens?.url || '',
    email: itens?.email || '',
    password: itens?.password || '',
    created_at: itens?.created_at || Date.now(),
    user_id: itens?.id || '',
  } as PropsCard);

  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleClear = () => {
    setData({
      nameSite: '',
      url: '',
      email: '',
      password: '',
      user_id: '',
    } as PropsCard);
  };

  async function handleSubmit() {
    setLoading(true);
    const userPassword = firestore().collection('passwords');
    try {
      if (
        data.nameSite === '' ||
        data.url === '' ||
        data.email === '' ||
        data.password === ''
      ) {
        setAlert(true);
        return;
      } else {
        await userPassword.add({
          nameSite: data.nameSite,
          url: data.url,
          email: data.email,
          password: data.password,
          created_at: data.created_at,
          user_id: dataUser.uid,
        });
        if (userPassword) {
          handleClear();
          setSuccess(true);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleDeletePassword = async () => {
    try {
      await firebase.firestore().collection('passwords').doc(itens.id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await firebase.firestore().collection('passwords').doc(itens.id).update({
        nameSite: data.nameSite,
        url: data.url,
        email: data.email,
        password: data.password,
      });
      setUpdate(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <StatusBar barStyle={'light-content'} backgroundColor="#1971C2" />

        <Styled.Header>
          <InfoHeader buttonleft boxColor colorInfo />
          <Styled.ContentForm>
            <Styled.InputFieldContainer>
              <InputInfo
                placeholder="Digite o nome do site"
                value={data.nameSite.trim()}
                onChangeText={(text: string) => {
                  setData({...data, nameSite: text});
                }}
                icon={data.nameSite.trim()}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputInfo2
                placeholder="Digite a url do site"
                autoCapitalize="none"
                keyboardType="web-search"
                value={data.url}
                onChangeText={text => setData({...data, url: text})}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputField
                placeholder="Digite seu login de acesso "
                autoCapitalize="none"
                keyboardType="email-address"
                value={data.email}
                onChangeText={text => setData({...data, email: text})}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputField
                placeholder="Digite a senha"
                autoCapitalize="none"
                secureTextEntry
                value={data.password}
                onChangeText={text => setData({...data, password: text})}
                iconSecAlone={itens ? false : true}
                iconCopyPast={itens ? true : false}
                iconSec={itens ? true : false}
                valueInput={data.password}
              />
            </Styled.InputFieldContainer>

            <Styled.ButtonContainer>
              <Button
                size="Medium"
                color="Blue100"
                textColor="Bluetxt"
                onPress={() => {
                  itens ? setConfirmDelete(true) : navigation.goBack();
                }}>
                {itens ? 'Excluir' : 'Cancelar'}
              </Button>
              <Button
                isLoading={loading}
                onPress={() => {
                  itens ? handleUpdate() : handleSubmit();
                }}
                size="Medium">
                {itens ? 'Atualizar' : 'Salvar'}
              </Button>
            </Styled.ButtonContainer>
          </Styled.ContentForm>

          <Styled.Alert>
            {alert && (
              <PopUp
                sizeBox="Medium"
                sizeBoxText="Medium"
                showAlert={alert}
                setShowAlert={setAlert}
                title={messages[0].message}
                alert={messages[0].type}
              />
            )}

            {success && (
              <PopUp
                sizeBox="Small"
                sizeBoxText="Small"
                showAlert={success}
                setShowAlert={setSuccess}
                title={messages[1].message}
                alert={messages[1].type}
              />
            )}

            {update && (
              <PopUp
                sizeBox="Small"
                sizeBoxText="Small"
                showAlert={update}
                setShowAlert={setUpdate}
                title={messages[2].message}
                alert={messages[2].type}
              />
            )}

            {confirmDelete && (
              <PopUp
                sizeBox="Large"
                sizeBoxText="Large"
                showAlert={confirmDelete}
                setShowAlert={setConfirmDelete}
                title={messages[4].message}
                alert={messages[4].type}
                handleConfirm={text => {
                  if (text) {
                    handleDeletePassword();
                    setConfirmDelete(false);
                    setSuccess(true);
                  }
                }}
              />
            )}
          </Styled.Alert>
        </Styled.Header>
      </KeyboardAvoidingView>
    </>
  );
}
