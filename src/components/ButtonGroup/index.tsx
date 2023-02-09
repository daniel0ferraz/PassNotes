import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import * as Styled from './styles';

type Props = {
  nameButtons: string[];
  onChangeText: (item: string) => void;
};

export default function ButtonGroup({ nameButtons, onChangeText }: Props) {
  const [clickedId, setClickedId] = useState(-1);

  const handleSubmit = (item: string) => {
    onChangeText(item);
  };

  return (
    <View
      style={{
        width: 286,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      {nameButtons.map((buttonLabel, index) => (
        <Styled.ButtonGroup
          key={index}
          onPress={() => {
            handleSubmit(buttonLabel);
            setClickedId(index);
          }}
          style={[index === clickedId ? styles.buttonActive : styles.button]}>
          <Text
            style={[
              index === clickedId ? styles.TextActive : styles.buttonGroupText,
            ]}>
            {buttonLabel}
          </Text>
        </Styled.ButtonGroup>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffcc00',
    borderColor: '#ffcc00',
  },
  buttonActive: {
    borderColor: '#ffcc00',
    backgroundColor: '#FFF',
  },

  buttonGroupText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '700',
  },

  TextActive: {
    color: '#ffcc00',
    fontSize: 17,
    fontWeight: '700',
  },
});
