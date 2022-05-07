import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link, useNavigate } from 'react-router-native';


const OrderItem = ({ order }) => {
  const navigate = useNavigate();

  const onPressSendPhotos = (orderId) => {
    navigate(`/orders/${orderId}/send-photo`);
  }

  return (
    <View>
      <Link to={`/orders/${order.id}`}>
        <Text>{order.id}</Text>
      </Link>
      <Text>{order.address}</Text>
      {order.status == 'Pending' && <Button title="Send Photos" onPress={() => onPressSendPhotos(order.id)} />}
    </View>
  );
}

export default OrderItem;