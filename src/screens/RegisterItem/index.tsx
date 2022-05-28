import React from 'react';

import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import IconArrowLeft from '../../assets/icon-arrowLeft.svg';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './styles';

export default function RegisterItem() {
  const navigation = useNavigation();
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
            <View>
              <View>
                <TextInput placeholder="Digite o nome do site" />
              </View>

              <View>
                <TextInput placeholder="Digite a url do site" />
              </View>
            </View>
          </Styled.ContentForm>
        </Styled.Header>
      </ScrollView>
    </SafeAreaView>
  );
}
