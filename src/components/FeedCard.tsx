import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconHeart from 'react-native-vector-icons/MaterialCommunityIcons';
import IconShare from 'react-native-vector-icons/MaterialIcons';
import IconThreeDots from 'react-native-vector-icons/Entypo';
import Seperator from './Seperator';

function FeedCard({
  imageUrl,
  description,
  author,
  timestamp,
}: {
  imageUrl: string;
  description: string;
  author: string;
  timestamp: string;
}) {
  return (
    <>
      <View className="flex justify-center items-center px-5 pt-5 pb-2">
        <View className="w-full  m-2 overflow-hidden">
          <Image
            source={{
              uri: imageUrl,
            }}
            style={styles.cardImage}
            className="rounded-2xl"
          />
          <View className="flex-1 flex-grow py-1 space-y-2">
            <Text className="text-white text-2xl flex-shrink py-2">
              {description}
            </Text>
            <View className="flex flex-row justify-between items-center mt-2">
              <View className="flex flex-row items-center gap-2 flex-[3]">
                <Image
                  source={{
                    uri: imageUrl,
                    width: 20,
                    height: 20,
                  }}
                  className="rounded-full"
                />
                <Text className="text-white font-bold">
                  {author} · {timestamp}
                </Text>
              </View>
              <View className="flex flex-row items-center justify-between space-x-2 flex-1">
                <IconHeart name="cards-heart-outline" size={20} color="#aaa" />
                <IconShare name="ios-share" size={20} color="#aaa" />
                <IconThreeDots
                  name="dots-three-vertical"
                  size={20}
                  color="#aaa"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Seperator />
    </>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
});

export default FeedCard;
