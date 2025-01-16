import {View, Image, Pressable, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {RootState} from '../store/appStore';

const ImageSearch = ({goToAddToSearch}: {goToAddToSearch: () => void}) => {
  const {capturedPhoto} = useSelector((state: RootState) => state.addToSearch);

  return (
    <Pressable
      onPress={goToAddToSearch}
      className="flex-1 bg-[#3C3C40] mt-4 mx-4 h-16 w-[90%] rounded-full flex-row items-center px-4">
      <View>
        <View className="flex-4 flex-row items-center justify-start h-full">
          <View className="flex-row items-center">
            <Icon name="google" size={25} color="#777" className="mr-2" />
            {capturedPhoto ? (
              <Image
                source={{uri: `file://${capturedPhoto}`}}
                resizeMode="cover"
                className="w-9 h-8 rounded-lg mr-2"
              />
            ) : null}

            <View>
              <Text className="text-white w-full">Add to search</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ImageSearch;
