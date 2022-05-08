import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Link, useNavigate } from 'react-router-native';


const OrderItem = ({ order }) => {
  const navigate = useNavigate();

  const onPressSendPhotos = (orderId) => {
    navigate(`/orders/${orderId}/send-photo`);
  }

  return (
    <Link to={`/orders/${order.id}`}>
      <View style={style.itemContainer}>
          <Text>Id: {order.id}</Text>
          <Text>Address: {order.address}</Text>
          <Text>Status: {order.status}</Text>
          <Text>Created at: {new Date(order.created_at).toLocaleString()}</Text>
          {order.status == 'Pending' && <Button title="Send Photos" onPress={() => onPressSendPhotos(order.id)} />}
      </View>
    </Link>
  );
}

const style = StyleSheet.create({
  // I want a container that will have a solid border and a margin to not touch the device screen
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  }
});


export default OrderItem;