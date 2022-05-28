import React, { useState } from 'react';

import { View, SafeAreaView, StatusBar, ScrollView, Alert } from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import { useNavigation } from '@react-navigation/native';
import InputField from './../../components/InputField';
import Button from '../../components/Button';
import * as Styled from './styles';

export default function RegisterItem() {
  const navigation = useNavigation();

  const [data, setData] = useState({
    logo: '',
    site: '',
    url: '',
  });

  function handleSubmit(data) {
    if (data.site === '' || data.url === '') {
      return;
    } else {
      console.log(data);
    }
  }

  function handleClear() {
    setData({
      logo: '',
      site: '',
      url: '',
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
              <InputField
                placeholder="Digite o nome do site"
                value={data.site}
                onChangeText={text => setData({ ...data, site: text })}
              />
            </Styled.InputFieldContainer>

            <Styled.InputFieldContainer>
              <InputField
                placeholder="Digite a url do site"
                value={data.url}
                onChangeText={text => setData({ ...data, url: text })}
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
