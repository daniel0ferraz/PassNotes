import React, { useState } from 'react';

import { TextInputProps, View } from 'react-native';

import IconEye from '../../assets/icon-eye.svg';
import IconEyeOff from '../../assets/icon-eye_off.svg';
import IconCopy from '../../assets/icon-copy.svg';
import IconFacebook from '../../assets/icon-facebook.svg';
import IconGoogle from '../../assets/icon-google.svg';
import IconFigma from '../../assets/figma.svg';
import IconGithub from '../../assets/github.svg';
import IconTwiter from '../../assets/twitter.svg';
import IconTwitch from '../../assets/twitch.svg';
import IconNotion from '../../assets/notion.svg';
import { PropsCard } from '../../@types/Card';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

export type InputProps = TextInputProps & {
  data: PropsCard;
  secureTextEntry?: boolean;
};

export default function CardPass({
  secureTextEntry,
  data,
  ...rest
}: InputProps) {
  const navigation = useNavigation();
  const [sec, setSec] = useState(secureTextEntry);

  const Iconsbrand = () => {
    switch (data?.logo) {
      case 'Facebook': {
        return <IconFacebook width={18} height={18} />;
      }
      case 'Google': {
        return <IconGoogle width={18} height={18} />;
      }

      case 'Figma': {
        return <IconFigma width={18} height={18} />;
      }

      case 'Github': {
        return <IconGithub width={18} height={18} />;
      }

      case 'Twiter': {
        return <IconTwiter width={18} height={18} />;
      }

      case 'Twitch': {
        return <IconTwitch width={18} height={18} />;
      }

      case 'Notion': {
        return <IconNotion width={18} height={18} />;
      }

      default:
        '';
    }
  };

  return (
    <>
      <Styled.Card onPress={() => navigation.navigate('ViewItem', data)}>
        <Styled.Icon>{Iconsbrand()}</Styled.Icon>
        <View>
          <Styled.InputText
            underlineColorAndroid="trasparent"
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

          <Styled.IconButton2>
            <IconCopy width={20} height={20} />
          </Styled.IconButton2>
        </View>
      </Styled.Card>
    </>
  );
}
