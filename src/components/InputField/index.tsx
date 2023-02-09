import React, { useState } from 'react';

import { TextInputProps, View } from 'react-native';
import IconEye from '../../assets/icon-eye_white.svg';
import IconEyeOff from '../../assets/icon-eye_off_white.svg';
import IconCopy from '../../assets/icon-copy_white.svg';
import * as Styled from './styles';

type InputFieldsProps = TextInputProps & {
  secureTextEntry?: boolean;
  iconCopyPast?: boolean | undefined;
  iconSec?: boolean | undefined;
  iconSecAlone?: boolean | undefined;
};

export default function InputField({
  secureTextEntry,
  iconCopyPast,
  iconSec,
  iconSecAlone,
  ...rest
}: InputFieldsProps) {
  const [sec, setSec] = useState(secureTextEntry);
  return (
    <>
      <View>
        <Styled.InputField
          secureTextEntry={sec}
          placeholderTextColor={'#ffffff'}
          iconCopyPast={iconCopyPast}
          iconSec={iconSec}
          iconSecAlone={iconSecAlone}
          {...rest}
        />

        {iconSec ? (
          <Styled.IconButton onPress={() => setSec(!sec)}>
            {sec ? (
              <IconEye fill="#F8F9FA" width={21} height={21} />
            ) : (
              <IconEyeOff fill="#F8F9FA" width={21} height={21} />
            )}
          </Styled.IconButton>
        ) : null}

        {iconCopyPast ? (
          <Styled.IconButton2>
            <IconCopy width={21} height={21} color="#fff" />
          </Styled.IconButton2>
        ) : null}

        {iconSecAlone ? (
          <Styled.IconButton2 onPress={() => setSec(!sec)}>
            {sec ? (
              <IconEye fill="#F8F9FA" width={21} height={21} />
            ) : (
              <IconEyeOff fill="#F8F9FA" width={21} height={21} />
            )}
          </Styled.IconButton2>
        ) : null}
      </View>
    </>
  );
}
