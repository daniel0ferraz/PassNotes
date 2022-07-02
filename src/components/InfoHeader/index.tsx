import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import { View } from 'react-native';
import * as Styled from './styles';

export default function InfoHeader() {
  const navigation = useNavigation();
  const [user, setUser] = useState();

  async function handleFetchData() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const user = await AsyncStorage.getItem('@passnotes:userlogued');
    const dataUser = user ? JSON.parse(user) : [];
    const myObject = Object.assign({}, dataUser);
    setUser(myObject[0].name);
  }

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <Styled.HeaderInfo>
      <View>
        <Styled.BoxUser>
          <Styled.IconUser />
          <Styled.Info>Olá, {user}</Styled.Info>
          <Styled.InfoName />
        </Styled.BoxUser>
      </View>

      <View>
        <Styled.SingOut onPress={() => navigation.goBack()}>
          <IconArrowLeft width={15} height={15} />
        </Styled.SingOut>
      </View>
    </Styled.HeaderInfo>
  );
}
