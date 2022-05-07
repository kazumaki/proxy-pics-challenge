import React from 'react';
import OrdersList from "./OrdersList"
import { View } from "react-native"

const Orders = ({ orders }) => {
  return (
    <View>
      <OrdersList orders={orders} />
    </View>
  )
}

export default Orders