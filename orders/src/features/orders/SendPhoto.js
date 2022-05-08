import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-native';
import { updateOrder } from './ordersAPI';
import PhotosList from './PhotosList';

const SendPhoto = ({loading}) => {
  const [images, setImages] = React.useState([]);
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onPressAddPhoto = async () => {
    const options = {
      quality: 0.5,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };
    const result = await launchCamera(options);
    setImages([...images, ...result.assets]);
  }

  const onPressSendPhotos = () => {
    const formData = new FormData();
    for(let i = 0; i < images.length; i++) {
      formData.append('order[photos][]', {
        uri: images[i].uri,
        type: 'image/jpeg',
        name: `photo${i}.jpg`,
      });
    }
    formData.append('order[order_id]', orderId);
    dispatch(updateOrder({orderId, formData}));
    navigate(-1);
  }

  return (
    <View style={styles.container}>
      {loading && <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)'}} />}
      <Button title="Add Photo" onPress={onPressAddPhoto} />
      <Button title="Send Photos" onPress={onPressSendPhotos} />
      <PhotosList photos={images.map(item => item.uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  // I want a container that will be a flex container and will have a small space between the items
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  }
});

export default SendPhoto;