import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLanguage from 'react-native-vector-icons/Ionicons';
import IconLens from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMusic from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FlatCards() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.card} className="bg-yellow-600 opacity-85">
          <Icon name="image-search-outline" size={25} color="yellow" />
        </View>
        <View style={styles.card} className="bg-blue-400 opacity-85">
          <IconLanguage name="language" size={25} color="blue" />
        </View>
        <View style={styles.card} className="bg-green-700 opacity-85">
          <IconLens name="google-lens" size={25} color="lightgreen" />
        </View>
        <View style={styles.card} className="bg-red-500 opacity-85">
          <IconMusic name="music-note-outline" size={25} color="#fecaca" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 60,
    borderRadius: 30,
  },
});
