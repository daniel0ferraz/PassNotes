import React from 'react';
import {TouchableOpacity} from 'react-native';

import IconArrowLeft from '../../../../assets/icon-arrowLeft.svg';
import IconProgress01 from '../../../../assets/Signup/progress_01.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

type Props = {
  title: string;
};

export default function Header({title}: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Styled.Container>
      <Styled.BoxItens>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconArrowLeft width={15} height={15} />
        </TouchableOpacity>
      </Styled.BoxItens>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Styled.TitlePage>{title}</Styled.TitlePage>
      </View>
    </Styled.Container>
  );
}
