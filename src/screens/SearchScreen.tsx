import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {recentSearches} from '../helper/mockData';
import useSearch from '../hooks/useSearch';
import {useSelector} from 'react-redux';
import {RootState} from '../store/appStore';

const SearchScreen = () => {
  const {searchQuery, showSuggestions, searchSuggestions, clearSearchState} =
    useSearch();

  const {cache} = useSelector((state: RootState) => state.search);
  console.log({cache}, 'cache');
  useEffect(() => {
    // Clear search state when the screen mounts
    clearSearchState();
  }, []);

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
    <SafeAreaView className="h-full bg-[#202124]">
      <View>
        {/* Header */}
        <View className="flex-row justify-between items-center p-4">
          <Text className="text-gray-400 text-base">Recent searches</Text>
          <Text className="text-gray-400 text-sm uppercase">
            Manage History
          </Text>
        </View>
        <Text className="text-white">Search query is {searchQuery}</Text>
        {/* Conditionally render suggestions or recent searches */}
        {searchQuery && showSuggestions ? (
          <FlatList
            data={searchSuggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            className="px-4"
          />
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

export default SearchScreen;
