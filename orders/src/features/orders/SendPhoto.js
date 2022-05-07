import React from 'react';
import { Button, Image, View } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { useSearchParams } from 'react-router-native';

const SendPhoto = () => {
  const [images, setImages] = React.useState([]);
  const [searchParams] = useSearchParams();

  const orderId = searchParams.get('orderId');

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
    console.log(images);
    setImages([...images, ...result.assets]);
  }

  return (
    <View>
      <Button title="Add Photo" onPress={onPressAddPhoto} />
      <View>
        {images.map(image => (
          <Image key={image.uri} source={image} style={{ width: 200, height: 200 }} />
        ))}
      </View>
    </View>
  );
}

export default SendPhoto;