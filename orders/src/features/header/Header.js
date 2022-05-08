import React from 'react';
import { Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setCurrentUserId } from '../authentication/authenticationSlice';

const Header = ({currentUserId}) => {
  const dispatch = useDispatch();

  const handleOnPressLogout = () => {
    dispatch(setCurrentUserId(null));
  }

  if(!currentUserId) {
    return null;
  }

  return (
    <View>
      <Button title="Logout" onPress={handleOnPressLogout} />
    </View>
  );
}

export default Header;