import {View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddToSearchScreenBottomTabs = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-around bg-[#3C3C40] py-3 pt-6 h-[80]">
      {/* Go Back */}
      <Pressable onPress={() => navigation.goBack()} className="items-center">
        <Icon name="arrow-back" size={24} color="#fff" />
      </Pressable>

      {/* Go Forward (Disabled) */}
      <Pressable className="items-center opacity-50" disabled>
        <Icon name="arrow-forward" size={24} color="#fff" />
      </Pressable>

      {/* Home */}
      <Pressable
        onPress={() => navigation.navigate('BottomTabs', {screen: 'Home'})}
        className="items-center">
        <Icon name="home" size={24} color="#fff" />
      </Pressable>

      {/* total tabs */}
      <Pressable className="items-center opacity-50">
        <Icon name="view-comfortable" size={24} color="#fff" />
      </Pressable>
    </View>
  );
};

export default AddToSearchScreenBottomTabs;
