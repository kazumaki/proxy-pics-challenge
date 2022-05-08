import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from "react-native";
import { useParams } from "react-router-native";
import { fetchOrder, getOrder } from './ordersAPI';
import PhotosList from './PhotosList';

const OrderDetails = ({loading}) => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const order = useSelector(state => getOrder(state, orderId));

  useEffect(() => {
    dispatch(fetchOrder(orderId));
  }, [dispatch, orderId]);

  if(loading) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={{flex: 1}}>
      <Text>{order.id}</Text>
      <Text>{order.address}</Text>
      <Text>{order.status}</Text>
      <PhotosList photos={order.photos_url} />
    </View>
  );
}

export default OrderDetails;