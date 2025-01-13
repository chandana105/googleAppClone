import {View, Text, SafeAreaView, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamList, RootStackParamList} from '../App';
import 'nativewind';

import Icon from 'react-native-vector-icons/Feather';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

const Home = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text className="text-white">Home</Text>
        <Pressable onPress={() => navigation.navigate('SearchScreen')}>
          <Text>Go to Search screen</Text>
          <Icon name="home" color="#4F8EF7" />
        </Pressable>
      </View>
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
