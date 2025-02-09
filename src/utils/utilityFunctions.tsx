import Icon from 'react-native-vector-icons/Feather';
import IconHistory from 'react-native-vector-icons/MaterialIcons';
import IconNotification from 'react-native-vector-icons/MaterialIcons';
import IconMenu from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import IconDots from 'react-native-vector-icons/MaterialIcons';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {HeaderBackButton} from '@react-navigation/elements';
import AddToSearchHeader from '../components/AddToSearchHeader';
import {useDispatch} from 'react-redux';
import {clearCapturedPhoto} from '../store/addToSearchSlice';

export const HomeIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="home" size={size} color={color} />
);

export const HistoryIcon = ({color, size}: {color: string; size: number}) => (
  <IconHistory name="history-toggle-off" size={size} color={color} />
);

export const NotificationIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <IconNotification name="notifications-none" size={size} color={color} />;

export const MenuIcon = ({color, size}: {color: string; size: number}) => (
  <IconMenu name="menu" size={size} color={color} />
);

export function CustomHeader({navigation}: any) {
  const route = useRoute();
  const {autoFocus} = route.params as {autoFocus: boolean};

  return (
    <View style={styles.headerContainer}>
      <SearchBar
        onMicrophonePress={() => navigation.navigate('MicrophoneScreen')}
        onLensPress={() => navigation.navigate('CameraLensScreen')}
        onBackPress={() => navigation.goBack()}
        autoFocus={autoFocus}
      />
    </View>
  );
}

export function CustomCameraScreenheader({navigation}: any) {
  const dispatch = useDispatch();

  const handleBackPress = () => {
    dispatch(clearCapturedPhoto());
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <HeaderBackButton tintColor="#aaa" onPress={handleBackPress} />
      <Text style={styles.headerText}>Google Lens</Text>
      <IconDots name="more-vert" size={24} color="#fff" />
    </View>
  );
}

export function CustomAddToSearchHeader() {
  const route = useRoute();
  const {autoFocus} = route.params as {autoFocus: boolean};
  return (
    <View style={styles.headerContainer}>
      <AddToSearchHeader autoFocus={autoFocus} />
    </View>
  );
}

export const CameraLensPermissions = ({requestPermission}: any) => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-center mb-4">
        Camera permission is required to use this feature.
      </Text>
      <Pressable
        onPress={async () => {
          const permissionGranted = await requestPermission();
          if (!permissionGranted) {
            Alert.alert(
              'Permission Denied',
              'Camera access is required. Please enable permissions in the app settings.',
            );
          }
        }}
        className="bg-blue-500 px-4 py-2 rounded">
        <Text className="text-white text-lg">Grant Permission</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    backgroundColor: '#202124',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  backButton: {
    padding: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerBackButton: {
    marginHorizontal: 5,
  },
});
