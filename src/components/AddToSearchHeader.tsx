import React, {useEffect, useRef} from 'react';
import {View, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/appStore';
import {setSearchQuery, setIsSubmitted} from '../store/addToSearchSlice';

type AddToSearchHeaderProps = {
  autoFocus?: boolean;
};

const AddToSearchHeader = ({autoFocus = false}: AddToSearchHeaderProps) => {
  const dispatch = useDispatch();
  const textInputRef = useRef<TextInput>(null);
  const {capturedPhoto, searchQuery} = useSelector(
    (state: RootState) => state.addToSearch,
  );

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      }, 100);
    }
  }, [autoFocus]);

  const handleSubmit = () => {
    dispatch(setIsSubmitted(true));
  };

  return (
    <View className="flex-1 bg-[#3C3C40]  mx-4 h-16 rounded-full flex-row items-center px-4">
      <View className="flex-4 flex-row items-center justify-start h-full">
        <View className="flex-row items-center">
          <Icon name="google" size={25} color="#777" className="mr-2" />
          {capturedPhoto ? (
            <Image
              source={{uri: `file://${capturedPhoto}`}}
              resizeMode="cover"
              className="w-8 h-8 rounded-lg mr-2"
            />
          ) : null}
          <TextInput
            ref={textInputRef}
            className="flex-1 text-white text-xl"
            keyboardType="default"
            placeholder="Add to search"
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={text => dispatch(setSearchQuery(text))}
            onSubmitEditing={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
};

export default AddToSearchHeader;
