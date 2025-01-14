import {Pressable, TextInput, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type SearchBarProps = PropsWithChildren<{
  navigation: any;
}>;

export default function SearchBar({navigation}: SearchBarProps) {
  const [userInput, setUserInput] = useState('');
  const clearInput = () => {
    setUserInput('');
  };
  return (
    <View className=" rounded-lg  m-4 flex flex-row items-center bg-slate-300 pr-2">
      <TextInput
        className="p-4 w-11/12 text-black"
        keyboardType="default"
        placeholder="Search for Restaurants"
        onChangeText={text => {
          setUserInput(text);
        }}
        onFocus={() => navigation.navigate('SearchScreen')}
        value={userInput}
      />
      {userInput ? (
        <Pressable onPress={clearInput}>
          <Icon name="close" size={25} color="#777" className="mr-2" />
        </Pressable>
      ) : (
        <Icon name="search" size={25} color="#777" className="" />
      )}
    </View>
  );
}
