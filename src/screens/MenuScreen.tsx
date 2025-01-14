import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu Screen</Text>
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
});

export default MenuScreen;
