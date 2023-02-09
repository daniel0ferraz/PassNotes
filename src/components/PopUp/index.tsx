import React from 'react';
import Button from '../Button';
import Check from '../../assets/icon-check.svg';
import Danger from '../../assets/icon-danger.svg';
import Alert from '../../assets/icon-alert.svg';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';

export type PropsPopUp = {
  title: string;
  alert: 'danger' | 'alert' | 'success' | 'alertConfirm' | any;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  showAlert: boolean;
  sizeBox?: 'Medium' | 'Small' | 'Large';
  sizeBoxText?: 'Medium' | 'Small' | 'Large';
  handleConfirm?: (text: boolean) => void;
};

export default function PopUp({
  title,
  alert,
  showAlert,
  sizeBox,
  sizeBoxText,
  setShowAlert,
  handleConfirm,
}: PropsPopUp) {
  const navigation = useNavigation();
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const Iconsbrand = (alert: any) => {
    switch (alert) {
      case 'danger':
        return <Danger width={45} height={40} />;
      case 'alert':
        return <Alert width={45} height={40} />;
      case 'alertConfirm':
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
          <Styled.Container sizeBox={sizeBox}>
            <Styled.Icon>{Iconsbrand(alert)}</Styled.Icon>
            <Styled.Message sizeBoxText={sizeBoxText}>{title}</Styled.Message>

            {alert === 'alertConfirm' ? (
              <>
                <Styled.RowBtn>
                  <Button
                    style={{borderRadius: 4}}
                    size="Small"
                    color="Blue100"
                    textColor="Bluetxt"
                    onPress={() => {
                      handleConfirm && handleConfirm(false);
                      setShowAlert(false);
                    }}>
                    Não
                  </Button>

                  <Button
                    style={{borderRadius: 4, marginLeft: 10}}
                    size="Small"
                    onPress={() => {
                      setShowAlert(false);
                      handleConfirm && handleConfirm(true);
                    }}>
                    Sim
                  </Button>
                </Styled.RowBtn>
              </>
            ) : (
              <Button
                size="Small"
                style={{borderRadius: 4}}
                onPress={() => {
                  setShowAlert(false);
                  alert === 'success' && navigation.goBack();
                }}
                color="Blue">
                Ok
              </Button>
            )}
          </Styled.Container>
        </Styled.Wrapper>
      ) : null}
    </>
  );
}
