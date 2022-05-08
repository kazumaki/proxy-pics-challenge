import React from 'react';
import { FlatList, Image, View } from 'react-native';


const PhotosList = ({ photos }) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        // I want a padding of 10px on the top and bottom between items inside the list
        style={{ padding: 10 }}
        numColumns={2}
        data={photos}
        renderItem={({ item }) => <Image style={{ width: '50%', height: 200, margin: 2 }} source={{ uri: item }} />}
      />
    </View>
  );
}

export default PhotosList;
