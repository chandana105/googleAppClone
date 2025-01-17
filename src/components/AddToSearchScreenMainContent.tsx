import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/appStore';
import {dummyImageResults, recentSearches} from '../helper/mockData';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Define the Tab Screens
function AllContent() {
  return (
    <SafeAreaView className="flex-1 bg-[#202124]">
      <FlatList
        data={dummyImageResults}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <SafeAreaView className="flex-1 m-2 bg-white p-12 rounded-xl">
            <View className="flex-1 m-2 ">
              <Image
                source={{uri: item.url}}
                className="w-full h-38 rounded-lg bg-white"
              />
            </View>
          </SafeAreaView>
        )}
        className="mt-5 px-4 "
      />
    </SafeAreaView>
  );
}

function AboutThisImageContent() {
  return (
    <View style={styles.tabContent}>
      <Text className="text-white">About This Image Content</Text>
    </View>
  );
}

// Create the MaterialTopTabNavigator
const TopTab = createMaterialTopTabNavigator();

function SearchTabs() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#3C3C40'},
        tabBarActiveTintColor: '#0df',
        tabBarInactiveTintColor: '#b0b0b0',
      }}>
      <TopTab.Screen name="All" component={AllContent} />
      <TopTab.Screen
        name="About this image"
        component={AboutThisImageContent}
      />
    </TopTab.Navigator>
  );
}

const AddToSearchScreenMainContent = () => {
  const {isSubmitted} = useSelector((state: RootState) => state.addToSearch);

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
    <View style={styles.container}>
      {isSubmitted ? (
        <SearchTabs />
      ) : (
        <FlatList
          data={recentSearches}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          className="px-4"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
  text: {
    color: '#ffffff',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202124',
  },
});

export default AddToSearchScreenMainContent;
