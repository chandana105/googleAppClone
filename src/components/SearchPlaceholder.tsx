import {Pressable, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMicrophone from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLens from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

type SearchBarProps = {
  onSearchPress: () => void;
  onMicrophonePress: () => void;
  onLensPress: () => void;
};

function SearchPlaceholder({
  onSearchPress,
  onMicrophonePress,
  onLensPress,
}: SearchBarProps) {
  return (
    <Pressable
      className="rounded-full m-4 my-1   flex flex-row justify-between items-center"
      style={styles.searchPlaceholder}
      onPress={onSearchPress}>
      {/* Left Section (80%) */}
      <View style={styles.leftSection} className="rounded-full px-8">
        <View className="flex flex-row items-center">
          <Icon name="search" size={30} color="#aaa" />
          <Text className="text-gray-300 text-3xl ml-2 pl-2">Search</Text>
        </View>
      </View>

      {/* Right Section (20%) */}
      <View style={styles.rightSection} className="pr-4">
        <Pressable onPress={onMicrophonePress}>
          <IconMicrophone name="microphone" size={25} color="#fff" />
        </Pressable>
        <Pressable onPress={onLensPress}>
          <IconLens name="google-lens" size={25} color="#fff" />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchPlaceholder: {
    flex: 1,
    backgroundColor: '#3C3C40',
    height: 75,
  },
  leftSection: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  rightSection: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
});

export default SearchPlaceholder;
