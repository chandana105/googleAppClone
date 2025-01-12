import {View, Text, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamList, RootStackParamList} from '../App';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

const Home = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Pressable onPress={() => navigation.navigate('SearchScreen')}>
          <Text>Go to Search screen</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
