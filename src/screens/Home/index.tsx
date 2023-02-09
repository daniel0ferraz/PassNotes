/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useState} from 'react';
import {View, SafeAreaView, StatusBar, Alert} from 'react-native';

import InfoRegisters from './../../components/InfoRegisters/index';

import ListItem from './../../components/ListItem';
import FabButton from '../../components/FabButton';

import {useFocusEffect} from '@react-navigation/native';
import {PropsCard} from '../../@types/Card';

import * as Styled from './styles';

import Loader from '../../components/Loader';
import NoData from '../../assets/noPassword.svg';
import firestore from '@react-native-firebase/firestore';
import InfoHeader from '../../components/InfoHeader';
import {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';

export default function Home() {
  const [listPass, setListPass] = useState<PropsCard[]>([]);
  const dataUser = firebase.auth().currentUser as FirebaseAuthTypes.User;
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      const passwords = firestore()
        .collection('passwords')
        .onSnapshot(querySnapshot => {
          const data = querySnapshot.docs.map(
            doc =>
              ({
                id: doc.id,
                ...doc.data(),
              } as PropsCard),
          );

          setListPass(data.filter(item => item.user_id === dataUser.uid));

          setLoading(false);
        });

      return () => passwords();
    }, []),
  );

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} backgroundColor="#1971C2" />
        <Styled.Header>
          <View>
            <InfoHeader />
          </View>

          <Styled.ContentInfo>
            <InfoRegisters count={listPass.length} />
          </Styled.ContentInfo>
        </Styled.Header>
        <Styled.ContentCards>
          {listPass.length <= 0 && (
            <>
              <Styled.BoxNoData>
                <NoData width={245} height={267} />
              </Styled.BoxNoData>
            </>
          )}
          {loading && (
            <>
              <Loader />
            </>
          )}
          <ListItem data={listPass} />
          <FabButton />
        </Styled.ContentCards>
      </SafeAreaView>
    </>
  );
}
