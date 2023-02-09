import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StatusBar} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import InputField from './../../components/InputField';
import Button from '../../components/Button';

import InputInfoLogo from './InputInfoLogo';
import InputInfo2 from '../../components/InputInfo2';
import {getLogo} from '../../components/InputInfo/logo';
import PopUp from '../../components/PopUp';

import IconArrowLeft from '../../assets/icon-arrowLeftBlue.svg';
import IconUser from '../../assets/icon-user.svg';
import {PropsCard} from '../../@types/Card';
import * as Styled from './styles';
import {messages} from '../../components/PopUp/Messages';
import {firebase} from '@react-native-firebase/firestore';
import {View} from 'react-native';
import {useTheme} from 'styled-components/native';

export default function ViewItem() {
  const navigation = useNavigation();
  const THEME = useTheme();

  const route = useRoute();
  const itens = route.params as PropsCard;

  const [data, setData] = useState({
    nameSite: itens.nameSite,
    url: itens.url,
    email: itens.email,
    password: itens.password,
    user_id: itens.user_id,
  } as PropsCard);

  const [icon, setIcon] = useState({icon: false});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [update, setUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeletePassword = async () => {
    try {
      await firebase.firestore().collection('passwords').doc(itens.id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor="#1971C2" />
      <Styled.Header>
        <Styled.HeaderInfo>
          <View>
            <Styled.BoxUser>
              <Styled.IconUser>
                <IconUser width={19} height={19} />
              </Styled.IconUser>
              <Styled.Info>Olá,</Styled.Info>
              <Styled.InfoName>Daniel</Styled.InfoName>
            </Styled.BoxUser>
          </View>

          <View>
            <Styled.SingOut onPress={() => navigation.goBack()}>
              <IconArrowLeft width={19} height={19} />
            </Styled.SingOut>
          </View>
        </Styled.HeaderInfo>

        <Styled.ContentForm>
          <Styled.InputFieldContainer>
            <InputInfoLogo
              placeholder="Digite o nome do site"
              placeholderTextColor={THEME.colors.blue300}
              value={data?.nameSite}
              onChangeText={(text: string) => {
                setData({...data, nameSite: text});
                setIcon(getLogo(itens?.nameSite));
              }}
              icon={data?.nameSite}
            />
          </Styled.InputFieldContainer>

          <Styled.InputFieldContainer>
            <InputInfo2
              placeholder="Digite a url do site"
              placeholderTextColor={THEME.colors.blue300}
              autoCapitalize="none"
              keyboardType="web-search"
              value={data?.url}
              onChangeText={text => setData({...data, url: text})}
            />
          </Styled.InputFieldContainer>

          <Styled.InputFieldContainer>
            <InputField
              placeholder="Digite seu email de acesso"
              placeholderTextColor={THEME.colors.white}
              autoCapitalize="none"
              keyboardType="email-address"
              value={data?.email}
              onChangeText={text => setData({...data, email: text})}
              iconCopyPast={true}
            />
          </Styled.InputFieldContainer>

          <Styled.InputFieldContainer>
            <InputField
              placeholder="Digite a senha"
              placeholderTextColor={THEME.colors.white}
              autoCapitalize="none"
              secureTextEntry
              value={data?.password}
              onChangeText={text => setData({...data, password: text})}
              iconCopyPast={true}
              iconSec={true}
            />
          </Styled.InputFieldContainer>

          <Styled.ButtonContainer>
            <Button
              size="Medium"
              color="Blue100"
              textColor="Bluetxt"
              onPress={() => setConfirmDelete(true)}>
              Excluir
            </Button>

            <Button
              size="Medium"
              isLoading={isLoading}
              onPress={() => {
                handleUpdate();
              }}>
              {itens ? 'Atualizar' : 'ok'}
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
              title={messages[3].message}
              alert={messages[3].type}
            />
          )}

          {success && (
            <PopUp
              sizeBox="Small"
              sizeBoxText="Small"
              showAlert={success}
              setShowAlert={setSuccess}
              title={messages[5].message}
              alert={messages[5].type}
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
    </SafeAreaView>
  );
}
