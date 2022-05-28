import React from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Singof from '../../assets/icon-singof.svg';
import InfoRegisters from './../../components/InfoRegisters/index';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';
import CardPass from '../../components/CardPass';

export default function Home() {
  const navigation = useNavigation();
  return (
    <>
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
                <Styled.SingOut onPress={() => navigation.navigate('LoginHub')}>
                  <Singof width={19} height={19} />
                </Styled.SingOut>
              </View>
            </Styled.HeaderInfo>

            <Styled.ContentInfo>
              <InfoRegisters />
            </Styled.ContentInfo>

            <Styled.ContentInfo>
              <Text>FlatList aqui!</Text>
              <CardPass secureTextEntry />
              <CardPass secureTextEntry />
              <CardPass secureTextEntry />
            </Styled.ContentInfo>
          </Styled.Header>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
