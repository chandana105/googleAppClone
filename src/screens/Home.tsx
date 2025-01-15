import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamList, RootStackParamList} from '../App';
import FeedCard from '../components/FeedCard';
import FlatCards from '../components/FlatCard';
import ElevatedCards from '../components/ElevatedCards';
import Seperator from '../components/Seperator';
import SearchPlaceholder from '../components/SearchPlaceholder';
import {feedCardsMockData} from '../helper/feedCardsData';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

const Home = ({navigation}: HomeScreenProps) => {
  const renderFeedCard = ({item}: {item: FeedCard}) => {
    return (
      <FeedCard
        imageUrl={item.imageUrl}
        description={item.description}
        author={item.author}
        timestamp={item.timestamp}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feedCardsMockData}
        renderItem={renderFeedCard}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <Text className="text-white text-center text-6xl p-8 font-bold">
              Google
            </Text>

            <SearchPlaceholder
              onSearchPress={() =>
                navigation.navigate('SearchScreen', {autoFocus: true})
              }
              onMicrophonePress={() => navigation.navigate('MicrophoneScreen')}
              onLensPress={() => navigation.navigate('CameraLensScreen')}
            />

            <FlatCards />
            <Seperator />
            <ElevatedCards />
          </>
        }
        ItemSeparatorComponent={Seperator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
});

export default Home;
