import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar, Text, View} from 'react-native';
import Home from './screens/Home';
import SearchScreen from './screens/SearchScreen';

const Profile = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

const Settings = () => (
  <View>
    <Text>Settings Screen</Text>
  </View>
);

const Settings2 = () => (
  <View>
    <Text>Settings2 Screen</Text>
  </View>
);

export type RootStackParamList = {
  BottomTabs: undefined;
  SearchScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Settings2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Settings2" component={Settings2} />
    </Tab.Navigator>
  );
}

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{title: 'Search'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
