import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import IconArrowLeft from '../../assets/icon-arrowLeftBlue.svg';
import IconDanger from '../../assets/icon-danger.svg';
import Singof from '../../assets/icon-singof.svg';
import {View} from 'react-native';
import * as Styled from './styles';

import IconUser from '../../assets/icon-user.svg';
import {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';

export type Props = {
  buttonleft?: boolean;
  boxColor?: boolean;
  colorInfo?: boolean;
};

export default function InfoHeader({buttonleft, boxColor, colorInfo}: Props) {
  const navigation = useNavigation();
  const [user, setUser] = useState({} as FirebaseAuthTypes.User);

  async function singOut() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log('Deu ruim singOut:', error);
    }
  }

  useEffect(() => {
    setUser(firebase.auth().currentUser as FirebaseAuthTypes.User);
  }, []);

  return (
    <Styled.HeaderInfo>
      <View>
        <Styled.BoxUser>
          {user?.photoURL ? (
            <Styled.ImageUser
              source={{
                uri: user?.photoURL,
              }}
            />
          ) : (
            <Styled.IconUser boxColor={boxColor}>
              <IconUser width={19} height={19} />
            </Styled.IconUser>
          )}
          <Styled.Info colorInfo={colorInfo}>Olá,</Styled.Info>
          <Styled.InfoName colorInfo={colorInfo}>
            {user?.displayName}
          </Styled.InfoName>
        </Styled.BoxUser>
      </View>

      <View>
        {buttonleft ? (
          <>
            <Styled.SingOut onPress={() => navigation.goBack()}>
              <IconArrowLeft width={19} height={19} />
            </Styled.SingOut>
          </>
        ) : (
          <Styled.SingOut onPress={() => singOut()}>
            <Singof width={19} height={19} />
          </Styled.SingOut>
        )}
      </View>
    </Styled.HeaderInfo>
  );
}
