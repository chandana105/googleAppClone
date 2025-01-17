import React from 'react';
import {View} from 'react-native';

import AddToSearchScreenBottomTabs from '../components/AddToSearchScreenBottomTabs';
import AddToSearchScreenMainContent from '../components/AddToSearchScreenMainContent';

const AddToSearchScreen = () => {
  return (
    <View className="flex-1">
      <AddToSearchScreenMainContent />
      <AddToSearchScreenBottomTabs />
    </View>
  );
};

export default AddToSearchScreen;
