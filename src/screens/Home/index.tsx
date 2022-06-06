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
import ButtonGroup from '../../components/ButtonGroup';
import Button from '../../components/Button';

export default function Home() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const [dataSimulator, setDataSimulator] = useState({
    typePayment: '',
    typeClient: '',
  });
  const { getItem } = useAsyncStorage('@passnotes:passwords');

  async function handleFetchData() {
    const response = await getItem();

    const data = response ? JSON.parse(response) : [];
    setData(data);
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
                <Styled.Info>Olá,</Styled.Info>
                <Styled.InfoName />
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
          <View
            style={{
              justifyContent: 'center',

              alignItems: 'center',
            }}>
            <ButtonGroup
              onChangeText={(item: any) =>
                setDataSimulator({ ...dataSimulator, typeClient: item })
              }
              nameButtons={['Cliente', 'Logista']}
            />
            <ButtonGroup
              onChangeText={(item: any) =>
                setDataSimulator({ ...dataSimulator, typePayment: item })
              }
              nameButtons={['Crédito', 'Débito']}
            />
          </View>

          {/* <FabButton /> */}
        </Styled.ContentCards>
      </SafeAreaView>
    </>
  );
}
