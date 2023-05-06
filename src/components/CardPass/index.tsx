import React, {useEffect, useState} from 'react';

import {Alert, TextInputProps, ToastAndroid} from 'react-native';

import IconEye from '../../assets/icon-eye.svg';
import IconEyeOff from '../../assets/icon-eye_off.svg';
import IconCopy from '../../assets/icon-copy.svg';

import {PropsCard} from '../../@types/Card';
import {useNavigation} from '@react-navigation/native';

import * as Styled from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {logoSite} from '../../utils/icons';

import Clipboard from '@react-native-clipboard/clipboard';

export type InputProps = TextInputProps & {
  data: PropsCard;
  secureTextEntry?: boolean;
};

export default function CardPass({secureTextEntry, data, ...rest}: InputProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [sec, setSec] = useState(secureTextEntry);

  const showToast = () => {
    ToastAndroid.showWithGravity(
      'Senha copiada',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  async function handleCopyToClipboard() {
    Clipboard.setString(data.password);
  }

  useEffect(() => {
    const subscription = Clipboard.addListener(() => {
      showToast();
    });

    return () => subscription.remove();
  }, []);

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

        <Styled.IconButton onPress={handleCopyToClipboard}>
          <IconCopy width={20} height={20} />
        </Styled.IconButton>
      </Styled.Card>
    </>
  );
}
