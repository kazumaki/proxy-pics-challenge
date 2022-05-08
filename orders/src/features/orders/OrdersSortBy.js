import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setOrderBy, setOrderOrder } from './ordersSlice';

const OrdersSortBy = ({ orderBy, orderOrder }) => {
  const dispatch = useDispatch();

  const handleOnChangeOrderBy = (orderBy) => {
    dispatch(setOrderBy(orderBy));
  }

  const handleOnChangeOrderOrder = (orderOrder) => {
    dispatch(setOrderOrder(orderOrder));
  }
  
  return (
    <View>
      <Text>Sort by:</Text>
      <Picker
        selectedValue={orderBy}
        onValueChange={handleOnChangeOrderBy}
        style={{ height: 50, width: 200 }}
        mode="dropdown"
      >
        <Picker.Item label="Id" value="id" />
        <Picker.Item label="Date" value="created_at" />
        <Picker.Item label="Address" value="address" />
        <Picker.Item label="Status" value="status" />
      </Picker>
      <Picker
        selectedValue={orderOrder}
        onValueChange={handleOnChangeOrderOrder}
        style={{ height: 50, width: 200 }}
        mode="dropdown"
      >
        <Picker.Item label="Ascending" value="asc" />
        <Picker.Item label="Descending" value="desc" />
      </Picker>
    </View>
  );
}

export default OrdersSortBy;