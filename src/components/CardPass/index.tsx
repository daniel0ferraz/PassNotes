import React, { useState } from 'react';

import { Text, TextInputProps, View } from 'react-native';

import IconEye from '../../assets/icon-eye.svg';
import IconEyeOff from '../../assets/icon-eye_off.svg';
import IconCopy from '../../assets/icon-copy.svg';

import * as Styled from './styles';

export type InputProps = TextInputProps & {
  icon?: any;
  secureTextEntry?: boolean;
};

export default function CardPass({
  secureTextEntry,
  icon,
  ...rest
}: InputProps) {
  const [sec, setSec] = useState(secureTextEntry);

  return (
    <>
      <Styled.Card>
        <Styled.Icon>{icon && icon}</Styled.Icon>
        <View>
          <Styled.InputText
            underlineColorAndroid="trasparent"
            secureTextEntry={sec}
            // editable={false}
            {...rest}
          />

          <Styled.IconButton onPress={() => setSec(!sec)}>
            {sec ? (
              <IconEye width={19} height={19} />
            ) : (
              <IconEyeOff width={19} height={19} />
            )}
          </Styled.IconButton>

          <Styled.IconButton2>
            <IconCopy width={20} height={20} />
          </Styled.IconButton2>
        </View>
      </Styled.Card>
    </>
  );
}
