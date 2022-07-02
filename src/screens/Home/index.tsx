/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import Singof from '../../assets/icon-singof.svg';
import InfoRegisters from './../../components/InfoRegisters/index';
import { useNavigation } from '@react-navigation/native';
import ListItem from './../../components/ListItem';
import FabButton from '../../components/FabButton';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as Styled from './styles';
import { FormData } from '../../@types/Form';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [data, setData] = useState([]);
  const [user, setUser] = useState<FormData[]>([] as FormData[]);

  const { getItem } = useAsyncStorage('@passnotes:passwords');

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);

    const user = await AsyncStorage.getItem('@passnotes:userlogued');
    const dataUser = user ? JSON.parse(user) : [];
    const myObject = Object.assign({}, dataUser);
    setUser(myObject[0].name);
  }

  // singOut
  async function singOut() {
    await AsyncStorage.removeItem('@passnotes:userlogued');
    navigation.navigate('LoginMail');
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} backgroundColor="#1971C2" />
        <Styled.Header>
          <Styled.HeaderInfo>
            <View>
              <Styled.BoxUser>
                <Styled.IconUser>
                  {/* <IconUser width={19} height={19} /> */}
                </Styled.IconUser>
                <Styled.Info>Olá, {user}</Styled.Info>
                <Styled.InfoName />
              </Styled.BoxUser>
            </View>

            <View>
              <Styled.SingOut onPress={() => singOut()}>
                <Singof width={19} height={19} />
              </Styled.SingOut>
            </View>
          </Styled.HeaderInfo>

          <Styled.ContentInfo>
            <InfoRegisters count={data} />
          </Styled.ContentInfo>
        </Styled.Header>

        <Styled.ContentCards>
          <ListItem data={data} />
          <FabButton />
        </Styled.ContentCards>
      </SafeAreaView>
    </>
  );
}
function tipeOf(user: string | null): any {
  throw new Error('Function not implemented.');
}
