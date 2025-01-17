import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {withSpring} from 'react-native-reanimated';
import ImageSearch from '../components/ImageSearch';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/appStore';
import useCameraLens from '../hooks/useCameraLens';
import {CameraLensPermissions} from '../utils/utilityFunctions';
import {clearCapturedPhoto, setIsSubmitted} from '../store/addToSearchSlice';

const {height} = Dimensions.get('window');

// when going to cameralens screen alsways if there is already caputred photo to clear it

const CameraLensScreen = ({navigation}: any) => {
  const camera = useRef<Camera>(null);
  const device = useCameraDevice('back');
  const dispatch = useDispatch();
  const {hasPermission, requestPermission} = useCameraPermission();

  const {capturedPhoto} = useSelector((state: RootState) => state.addToSearch);

  const {translateY, animatedStyle, handleTakePhoto, handleGesture} =
    useCameraLens({navigation, camera});

  useEffect(() => {
    if (capturedPhoto) {
      dispatch(clearCapturedPhoto());
      dispatch(setIsSubmitted(false));
    }
  }, []);

  if (hasPermission === null) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-white">Checking Camera Permission...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return <CameraLensPermissions requestPermission={requestPermission} />;
  }

  if (!device) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <Text className="text-white">No Camera Device Found.</Text>
      </View>
    );
  }

  const goToAddToSearch = () =>
    navigation.navigate('AddToSearch', {autoFocus: true});

  return (
    <GestureHandlerRootView style={styles.container}>
      <View className="flex-1 bg-black">
        {/* Camera or Captured Photo */}
        {capturedPhoto ? (
          <Image
            source={{uri: `file://${capturedPhoto}`}}
            resizeMode="cover"
            style={styles.image}
          />
        ) : (
          <Camera
            ref={camera}
            style={styles.camera}
            device={device}
            isActive={true}
            photo={true}
            className="rounded-b-2xl"
          />
        )}

        {/* Overlay for Cropping */}
        {!capturedPhoto && (
          <View className="absolute inset-0 flex-1 top-[20%] items-center">
            <View className=" opacity-80 w-9/12 h-2/5 relative">
              {/* Corners */}
              <View className="absolute w-12 h-12  border-t-4 border-l-4 border-white top-0 left-0" />
              <View className="absolute w-12 h-12  border-t-4 border-r-4 border-white top-0 right-0" />
              <View className="absolute w-12 h-12  border-b-4 border-l-4 border-white bottom-0 left-0" />
              <View className="absolute w-12 h-12  border-b-4 border-r-4 border-white bottom-0 right-0" />
            </View>
          </View>
        )}

        {/* Capture Button */}
        {!capturedPhoto && (
          <Pressable
            onPress={handleTakePhoto}
            className="absolute bottom-32 self-center bg-blue-500 rounded-full w-20 h-20 items-center justify-center z-10">
            <Text className="text-white font-bold">Capture</Text>
          </Pressable>
        )}

        {/* Footer */}
        {!capturedPhoto ? (
          <View className="absolute bottom-0 w-full flex-row justify-around bg-black bg-opacity-80 py-4">
            <Pressable className="items-center">
              <Text className="text-white">Translate</Text>
            </Pressable>
            <Pressable className="items-center">
              <Text className="text-white">Search</Text>
            </Pressable>
            <Pressable className="items-center">
              <Text className="text-white">Homework</Text>
            </Pressable>
          </View>
        ) : (
          <PanGestureHandler
            onGestureEvent={handleGesture}
            onEnded={() => {
              if (translateY.value < -150) {
                translateY.value = withSpring(-height / 2);
              } else {
                translateY.value = withSpring(0);
              }
            }}>
            <Animated.View style={[styles.draggableView, animatedStyle]}>
              <ImageSearch goToAddToSearch={goToAddToSearch} />
              <View className="h-44" />
            </Animated.View>
          </PanGestureHandler>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    width: '100%',
    height: '90%',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  draggableView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 230,
    backgroundColor: '#333',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CameraLensScreen;
