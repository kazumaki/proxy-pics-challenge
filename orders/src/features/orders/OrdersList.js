import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import OrderItem from './OrderItem';

const OrdersList = ({ orders, loading }) => {
  if(loading) {
    return null;
  }
  
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={orders}
        extraData={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default OrdersList;