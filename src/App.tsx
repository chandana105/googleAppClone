import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import SearchScreen from './screens/SearchScreen';
import MicrophoneScreen from './screens/MicrophoneScreen';
import CameraLensScreen from './screens/CameraLensScreen';
import {Provider} from 'react-redux';
import appStore from './store/appStore';
import {
  CustomAddToSearchHeader,
  CustomCameraScreenheader,
  CustomHeader,
  HistoryIcon,
  HomeIcon,
  MenuIcon,
  NotificationIcon,
} from './utils/utilityFunctions';
import AddToSearchScreen from './screens/AddToSearchScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import HistoryScreen from './screens/HistoryScreen';
import NotificationScreen from './screens/NotificationScreen';
import MenuScreen from './screens/MenuScreen';

export type RootStackParamList = {
  BottomTabs: {screen?: keyof BottomTabParamList};
  SearchScreen: {autoFocus: boolean};
  MicrophoneScreen: undefined;
  CameraLensScreen: undefined;
  AddToSearch: {autoFocus: boolean};
};

export type BottomTabParamList = {
  Home: {clearPhoto: boolean};
  History: undefined;
  Notification: undefined;
  Menu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const searchScreenOptions = (navigation: any) => ({
  header: () => <CustomHeader navigation={navigation} />,
});

const cameraScreenOptions = (navigation: any) => ({
  header: () => <CustomCameraScreenheader navigation={navigation} />,
});

const addToSearchScreenOptions = () => ({
  header: () => <CustomAddToSearchHeader />,
});

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
          height: 70,
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
            options={({navigation}) => cameraScreenOptions(navigation)}
          />
          <Stack.Screen
            name="AddToSearch"
            component={AddToSearchScreen}
            options={() => addToSearchScreenOptions()}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
