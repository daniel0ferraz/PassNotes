import React from 'react';
import ButtonIcon from '../ButtonIcon';
import IconAdd from '../../assets/icon-add.svg';
import {useNavigation} from '@react-navigation/native';
import * as Styled from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function FabButton() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <>
      <Styled.Container>
        <ButtonIcon
          color="Blue"
          format="round"
          onPress={() => navigation.navigate('RegisterItem')}
          icon={<IconAdd width={20} height={20} />}
        />
      </Styled.Container>
    </>
  );
}
