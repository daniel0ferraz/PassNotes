import React, { useCallback, useState } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import Singof from '../../assets/icon-singof.svg';
import IconUser from '../../assets/Vector.svg';
import InfoRegisters from './../../components/InfoRegisters/index';
import { useNavigation } from '@react-navigation/native';
import ListItem from './../../components/ListItem';
import FabButton from '../../components/FabButton';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as Styled from './styles';

export default function Home() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const { getItem } = useAsyncStorage('@passnotes:passwords');

  async function handleFetchData() {
    const response = await getItem();

    const data = response ? JSON.parse(response) : [];
    setData(data);
    console.log(data.length);
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
                  <IconUser width={19} height={19} />
                </Styled.IconUser>
                <Styled.Info>Olá,</Styled.Info>
                <Styled.InfoName>Daniel</Styled.InfoName>
              </Styled.BoxUser>
            </View>

            <View>
              <Styled.SingOut onPress={() => navigation.navigate('LoginHub')}>
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
