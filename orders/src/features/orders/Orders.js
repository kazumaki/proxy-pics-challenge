import React from 'react';
import OrdersList from "./OrdersList"
import { View } from "react-native"
import OrdersSortBy from './OrdersSortBy';

const Orders = ({ orders, orderBy, orderOrder }) => {
  return (
    <View style={{flex: 1}}>
      <OrdersSortBy orderBy={orderBy} orderOrder={orderOrder} />
      <OrdersList orders={orders} />
    </View>
  )
}

export default Orders