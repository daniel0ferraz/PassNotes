import React from 'react';
import Button from '../Button';
import Check from '../../assets/icon-check.svg';
import Danger from '../../assets/icon-danger.svg';
import Alert from '../../assets/icon-alert.svg';
import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native';

type PropsPopUp = {
  title: string;
  alert: 'danger' | 'alert' | 'success' | any;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  showAlert: boolean;
};

export default function PopUp({
  title,
  alert,
  showAlert,
  setShowAlert,
}: PropsPopUp) {
  const navigation = useNavigation();
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const Iconsbrand = (alert: any) => {
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
      {showAlert ? (
        <Styled.Wrapper>
          <Styled.Container>
            <Styled.Icon>{Iconsbrand(alert)}</Styled.Icon>
            <Styled.Message>{title}</Styled.Message>

            <Button
              size="Small"
              onPress={() => {
                setShowAlert(false);
                alert === 'success' && navigation.goBack();
              }}
              color="Blue">
              Ok
            </Button>
          </Styled.Container>
        </Styled.Wrapper>
      ) : null}
    </>
  );
}
