import React, {useState} from 'react';

import {TextInputProps} from 'react-native';

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
import Instagram from '../../assets/instagram.svg';
import Slack from '../../assets/slack.svg';
import Outlook from '../../assets/outlook.svg';
import RocketChat from '../../assets/rocketchat.svg';
import IconWord from '../../assets/icon-worldblue.svg';
import {PropsCard} from '../../@types/Card';
import {useNavigation} from '@react-navigation/native';

import * as Styled from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type InputProps = TextInputProps & {
  data: PropsCard;
  secureTextEntry?: boolean;
};

export default function CardPass({secureTextEntry, data, ...rest}: InputProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [sec, setSec] = useState(secureTextEntry);

  const Iconsbrand = () => {
    switch (data?.nameSite) {
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
      case 'Instagram': {
        return <Instagram width={18} height={18} />;
      }
      case 'Slack': {
        return <Slack width={18} height={18} />;
      }
      case 'Outlook': {
        return <Outlook width={18} height={18} />;
      }
      case 'RocketChat': {
        return <RocketChat width={18} height={18} />;
      }
      default:
        return <IconWord width={18} height={18} />;
    }
  };

  return (
    <>
      <Styled.Card onPress={() => navigation.navigate('RegisterItem', data)}>
        <Styled.Icon>{Iconsbrand()}</Styled.Icon>

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
