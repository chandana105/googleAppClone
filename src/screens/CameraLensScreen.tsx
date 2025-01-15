import React from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function CameraLensScreen({navigation}: any) {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  console.log({device}); //undefined ???
  if (hasPermission === null) {
    return (
      <View style={styles.center}>
        <Text className="text-white">Checking Camera Permission...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.center}>
        <Text>Camera permission is required to use this feature.</Text>
        <Button
          title="Grant Permission"
          onPress={async () => {
            const permissionGranted = await requestPermission();
            if (!permissionGranted) {
              Alert.alert(
                'Permission Denied',
                'Camera access is required. Please enable permissions in the app settings.',
              );
            }
          }}
        />
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.center}>
        <Text className="text-white">No Camera Device Found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Camera Preview */}
      <Camera style={styles.camera} device={device} isActive={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
