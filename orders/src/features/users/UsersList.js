import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';

const UsersList = ({users, currentSelected, handleOnChangeUser}) => {
  return (
    <View>
      <Picker selectedValue={currentSelected} onValueChange={handleOnChangeUser}>
        {users.map(user => (
          <Picker.Item key={user.id} label={user.name} value={user.id} />
        ))}
      </Picker>
    </View>
  )
}

export default UsersList;