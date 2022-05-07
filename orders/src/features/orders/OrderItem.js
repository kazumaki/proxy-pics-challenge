import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigate, useNavigate } from 'react-router-native';


const OrderItem = ({ order }) => {
  const navigate = useNavigate();

  const onPressSendPhotos = (orderId) => {
    navigate(`/orders/${orderId}/send-photo`);
  }

  return (
    <View>
      <Text>{order.id}</Text>
      <Text>{order.address}</Text>
      {order.status == 'Pending' && <Button title="Send Photos" onPress={() => onPressSendPhotos(order.id)} />}
    </View>
  );
}

export default OrderItem;