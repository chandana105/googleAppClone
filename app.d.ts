export type RootStackParamList = {
  BottomTabs: undefined;
  SearchScreen: {autoFocus: boolean};
  MicrophoneScreen: undefined;
  CameraLensScreen: undefined;
  AddToSearch: {autoFocus: boolean};
};

export type BottomTabParamList = {
  Home: undefined;
  History: undefined;
  Notification: undefined;
  Menu: undefined;
};

interface FeedCardObject {
  id: string;
  imageUrl: string;
  description: string;
  author: string;
  timestamp: string;
}
