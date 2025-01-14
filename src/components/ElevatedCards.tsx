import {ScrollView, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type CardProps = PropsWithChildren<{
  title: string;
  info: string;
  infoImg: string;
}>;

const Card = ({title, info, infoImg}: CardProps) => {
  return (
    <View className="w-[180px] h-[100px] rounded-2xl m-2 border border-gray-500 p-2 flex justify-between">
      {/* Top-Left Content */}
      <View className="px-2 py-1">
        <Text className="text-white text-xl font-semibold">{title}</Text>
      </View>

      {/* Bottom Content */}
      <View className="flex flex-row justify-between items-center w-full p-2">
        <Text
          className="text-white text-sm font-bold flex-1"
          numberOfLines={1}
          ellipsizeMode="tail">
          {info}
        </Text>
        <Text className="text-white text-base">{infoImg}</Text>
      </View>
    </View>
  );
};

export default function ElevatedCards() {
  return (
    <ScrollView horizontal className="p-3">
      <Card title="Jalandhar" info="30°" infoImg="☀️" />
      <Card title="Air quality - 110" info="Moderate" infoImg="♒️" />
      <Card title="😃 Settings" info="Customise your space" infoImg="" />
    </ScrollView>
  );
}
