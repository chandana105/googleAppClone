import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import SearchScreen from './screens/SearchScreen';
import MicrophoneScreen from './screens/MicrophoneScreen';
import CameraLensScreen from './screens/CameraLensScreen';
import {Provider} from 'react-redux';
import appStore from './store/appStore';
import {RootStackParamList} from '../app';
import {
  BottomTabs,
  CustomAddToSearchHeader,
  CustomCameraScreenheader,
  CustomHeader,
} from './utils/utilityFunctions';
import AddToSearchScreen from './screens/AddToSearchScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const searchScreenOptions = (navigation: any) => ({
  header: () => <CustomHeader navigation={navigation} />,
});

const cameraScreenOptions = (navigation: any) => ({
  header: () => <CustomCameraScreenheader navigation={navigation} />,
});

const addToSearchScreenOptions = (navigation: any) => ({
  header: () => <CustomAddToSearchHeader navigation={navigation} />,
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
            options={({navigation}) => cameraScreenOptions(navigation)}
          />
          <Stack.Screen
            name="AddToSearch"
            component={AddToSearchScreen}
            options={({navigation}) => addToSearchScreenOptions(navigation)}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
