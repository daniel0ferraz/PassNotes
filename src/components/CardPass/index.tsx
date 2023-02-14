import React, {useState} from 'react';

import {TextInputProps} from 'react-native';

import IconEye from '../../assets/icon-eye.svg';
import IconEyeOff from '../../assets/icon-eye_off.svg';
import IconCopy from '../../assets/icon-copy.svg';

import {PropsCard} from '../../@types/Card';
import {useNavigation} from '@react-navigation/native';

import * as Styled from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { logoSite } from '../../utils/icons';

export type InputProps = TextInputProps & {
  data: PropsCard;
  secureTextEntry?: boolean;
};

export default function CardPass({secureTextEntry, data, ...rest}: InputProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [sec, setSec] = useState(secureTextEntry);

  
  return (
    <>
      <Styled.Card onPress={() => navigation.navigate('RegisterItem', data)}>
        <Styled.Icon>{logoSite(data.nameSite.trim())}</Styled.Icon>

        <Styled.InputText
          secureTextEntry={sec}
          value={data?.password}
          editable={false}
          {...rest}
        />

        <Styled.IconButton onPress={() => setSec(!sec)}>
          {sec ? (
            <IconEye width={19} height={19} />
          ) : (
            <IconEyeOff width={19} height={19} />
          )}
        </Styled.IconButton>

        <Styled.IconButton>
          <IconCopy width={20} height={20} />
        </Styled.IconButton>
      </Styled.Card>
    </>
  );
}
