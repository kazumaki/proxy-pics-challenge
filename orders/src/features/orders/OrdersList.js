import React from 'react';
import { View, FlatList } from 'react-native';
import OrderItem from './OrderItem';

const OrdersList = ({ orders }) => {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default OrdersList;