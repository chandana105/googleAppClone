import React from 'react';
import {View, Text, SafeAreaView, FlatList, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {RootState} from '../store/appStore';
import {recentSearches} from '../helper/mockData';

const AddToSearchScreen = () => {
  const {isSubmitted, searchQuery} = useSelector(
    (state: RootState) => state.addToSearch,
  );
  console.log({isSubmitted, searchQuery}, 'screeenaddto');
  const renderItem = ({item}: any) => (
    <Pressable className="flex-row items-center py-3 px-2 shadow-sm rounded-md mb-2 bg-[#202124]">
      <Icon
        name="history"
        size={20}
        color="#a8a8a8"
        className="mr-3 bg-[#3C3C40] p-1 rounded-full"
      />
      <Text className="text-white text-lg flex-shrink">{item}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#202124]">
      <View>
        {isSubmitted ? (
          <Text className="text-white text-xl px-4">
            Submitted Search: {searchQuery}
          </Text>
        ) : (
          <FlatList
            data={recentSearches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            className="px-4"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default AddToSearchScreen;
