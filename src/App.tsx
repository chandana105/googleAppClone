import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar, StyleSheet, View} from 'react-native';
import Home from './screens/Home';
import SearchScreen from './screens/SearchScreen';
import MicrophoneScreen from './screens/MicrophoneScreen';
import CameraLensScreen from './screens/CameraLensScreen';
import HistoryScreen from './screens/HistoryScreen';
import NotificationScreen from './screens/NotificationScreen';
import MenuScreen from './screens/MenuScreen';
import {
  HistoryIcon,
  HomeIcon,
  MenuIcon,
  NotificationIcon,
} from './utils/utilityFunctions';
import SearchBar from './components/SearchBar';
import {useRoute} from '@react-navigation/native';
import {Provider} from 'react-redux';
import appStore from './store/appStore';

export type RootStackParamList = {
  BottomTabs: undefined;
  SearchScreen: {autoFocus: boolean};
  MicrophoneScreen: undefined;
  CameraLensScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  History: undefined;
  Notification: undefined;
  Menu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#202124',
        },
        headerTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#3C3C40',
          borderColor: '#3C3C40',
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#0df',
        tabBarInactiveTintColor: '#b0b0b0',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: '',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => HomeIcon({color, size: 24}),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerTitle: '',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => HistoryIcon({color, size: 24}),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerTitle: '',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => NotificationIcon({color, size: 24}),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerTitle: '',
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => MenuIcon({color, size: 24}),
        }}
      />
    </Tab.Navigator>
  );
}

function CustomHeader({navigation}: any) {
  const route = useRoute();
  const {autoFocus} = route.params as {autoFocus: boolean};

  return (
    <View style={styles.headerContainer}>
      <SearchBar
        onMicrophonePress={() => navigation.navigate('MicrophoneScreen')}
        onLensPress={() => navigation.navigate('CameraLensScreen')}
        onBackPress={() => navigation.goBack()}
        autoFocus={autoFocus}
      />
    </View>
  );
}

const searchScreenOptions = (navigation: any) => ({
  header: () => <CustomHeader navigation={navigation} />,
});

export default function App(): React.JSX.Element {
  return (
    <Provider store={appStore}>
      <NavigationContainer>
        <StatusBar backgroundColor="#202124" barStyle="light-content" />
        <Stack.Navigator
          initialRouteName="BottomTabs"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#202124',
            },
            headerTintColor: '#ffffff',
          }}>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{headerShown: false, title: ''}}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={({navigation}) => searchScreenOptions(navigation)}
          />
          <Stack.Screen
            name="MicrophoneScreen"
            component={MicrophoneScreen}
            options={{
              title: 'Microphone',
            }}
          />
          <Stack.Screen
            name="CameraLensScreen"
            component={CameraLensScreen}
            options={{
              title: 'CamerLens',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    backgroundColor: '#202124',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
