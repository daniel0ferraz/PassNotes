import React from 'react';

import { FlatList, View } from 'react-native';
import { PropsCard } from '../../@types/Card';
import CardPass from '../CardPass';

type PropsListItem = {
  data: PropsCard[];
};

export default function ListItem({ data }: PropsListItem) {
  function renderCard(item: PropsCard) {
    return <CardPass data={item} secureTextEntry />;
  }
  return (
    <View>
      <FlatList
        data={data}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: PropsCard) => String(item.id)}
        renderItem={({ item }) => renderCard(item)}
      />
    </View>
  );
}
