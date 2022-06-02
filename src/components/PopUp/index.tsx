import React, { useState } from 'react';
import Button from '../Button';
import Check from '../../assets/icon-check.svg';
import Danger from '../../assets/icon-danger.svg';
import Alert from '../../assets/icon-alert.svg';
import * as Styled from './styles';

type PropsPopUp = {
  title: string;
  alert: 'danger' | 'alert' | 'success';
};

export default function PopUp({ title, alert }: PropsPopUp) {
  const [visible, setVisible] = useState(false);
  const [close, setClose] = useState(true);

  const Iconsbrand = alert => {
    switch (alert) {
      case 'danger':
        return <Danger width={45} height={40} />;
      case 'alert':
        return <Alert width={45} height={40} />;
      case 'success':
        return <Check width={45} height={40} />;
      default:
        '';
    }
  };

  return (
    <>
      {close && (
        <>
          <Styled.Wrapper>
            <Styled.Container>
              <Styled.Icon>{Iconsbrand(alert)}</Styled.Icon>
              <Styled.Message>{title}</Styled.Message>
              <Button
                size="Small"
                onPress={() => {
                  setClose(!close);
                  setVisible(!visible);
                }}
                color="Blue">
                Ok
              </Button>
            </Styled.Container>
          </Styled.Wrapper>
        </>
      )}
    </>
  );
}
