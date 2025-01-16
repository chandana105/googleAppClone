import {useDispatch} from 'react-redux';
import {setCapturedPhoto} from '../store/addToSearchSlice';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {Alert} from 'react-native';

const useCameraLens = ({navigation, camera}: any) => {
  const dispatch = useDispatch();

  const translateY = useSharedValue(0);

  // Handle the gesture for the draggable view
  const handleGesture = (event: any) => {
    if (event.nativeEvent.translationY < -150) {
      navigation.navigate('AddToSearch');
    } else {
      translateY.value = withSpring(0);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const handleTakePhoto = async () => {
    try {
      if (camera.current) {
        const photo = await camera.current.takePhoto();
        dispatch(setCapturedPhoto(photo.path));
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to capture photo. Please try again.');
    }
  };

  // const handleCropPhoto = () => {
  //   Alert.alert('Crop Feature', 'Cropping is not implemented yet.');
  //   // Here, integrate a cropping library like react-native-image-crop-picker
  // };

  return {
    translateY,
    animatedStyle,
    handleTakePhoto,
    handleGesture,
  };
};

export default useCameraLens;
