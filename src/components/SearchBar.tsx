import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, Pressable, StyleSheet} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMicrophone from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLens from 'react-native-vector-icons/MaterialCommunityIcons';

type SearchBarProps = {
  onMicrophonePress: () => void;
  onLensPress: () => void;
  onBackPress: () => void;
  autoFocus?: boolean;
};

function SearchBar({
  onMicrophonePress,
  onLensPress,
  onBackPress,
  autoFocus = false,
}: SearchBarProps) {
  const [userInput, setUserInput] = useState('');
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocus) {
      // Using setTimeout to delay the focus slightly and ensuring the component has mounted
      setTimeout(() => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      }, 100); // Delay by 100ms
    }
  }, [autoFocus]); // Focus when autoFocus changes

  const clearInput = () => {
    setUserInput('');
  };

  return (
    <View
      className="rounded-full m-4 mt-20 flex flex-row justify-between items-center"
      style={styles.searchPlaceholder}>
      <View style={styles.leftSection} className="rounded-full px-2">
        <View className="flex flex-row items-center">
          <HeaderBackButton
            onPress={onBackPress}
            tintColor="#ffffff"
            style={styles.headerBackButton}
          />
          <TextInput
            ref={textInputRef}
            className="w-11/12 text-white"
            keyboardType="default"
            placeholder="Search for Restaurants"
            placeholderTextColor="#aaa"
            onChangeText={text => setUserInput(text)}
            value={userInput}
            style={styles.textInput}
          />
        </View>
      </View>

      {userInput ? (
        <View style={[styles.rightSection, styles.closeButton]}>
          <Pressable onPress={clearInput}>
            <Icon name="close" size={25} color="#777" className="mr-4" />
          </Pressable>
        </View>
      ) : (
        <View style={styles.rightSection} className="pr-8 gap-8">
          <Pressable onPress={onMicrophonePress}>
            <IconMicrophone name="microphone" size={25} color="#fff" />
          </Pressable>
          <Pressable onPress={onLensPress}>
            <IconLens name="google-lens" size={25} color="#fff" />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchPlaceholder: {
    flex: 1,
    backgroundColor: '#3C3C40',
    height: 60,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftSection: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  textInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 20,
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
  closeButton: {
    justifyContent: 'flex-end',
  },
  headerBackButton: {
    marginHorizontal: 5,
  },
});

export default SearchBar;
