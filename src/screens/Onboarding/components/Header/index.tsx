import React from 'react';
import { StyleSheet } from 'react-native';
import Icon03 from '../../../../assets/Onboarding/ilustra03.svg';
import Icon04 from '../../../../assets/Onboarding/ilustra04.svg';
import Icon05 from '../../../../assets/Onboarding/ilustra05.svg';
import * as Styled from './styles';

type PropsHeader = {
  icon?: string;
  iconHeigth?: number;
  iconWidth?: number;
};

export default function Header({ icon, iconHeigth, iconWidth }: PropsHeader) {
  // funcao que retorna icones de acordo com o parametro passado
  const IconHeader = () => {
    switch (icon) {
      case 'Icon03':
        return (
          <Styled.Icon style={styles.about}>
            <Icon03 width={iconHeigth} height={iconWidth} />
          </Styled.Icon>
        );

      case 'Icon04':
        return (
          <Styled.Icon style={styles.aboutApp}>
            <Icon04 width={iconHeigth} height={iconWidth} />
          </Styled.Icon>
        );

      case 'Icon05':
        return (
          <Styled.Icon style={styles.welcome}>
            <Icon05 width={iconHeigth} height={iconWidth} />
          </Styled.Icon>
        );

      default:
        return '';
    }
  };

  return <Styled.Container>{IconHeader()}</Styled.Container>;
}

const styles = StyleSheet.create({
  about: {
    position: 'absolute',
    // left: 63,
    // top: 51,
    bottom: -1,
  },

  aboutApp: {
    position: 'absolute',
    width: 338,
    height: 359.9,
  },
  welcome: { position: 'absolute', left: 27, top: 51 },
});
