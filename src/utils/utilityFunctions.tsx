import Icon from 'react-native-vector-icons/Feather';
import IconHistory from 'react-native-vector-icons/MaterialIcons';
import IconNotification from 'react-native-vector-icons/MaterialIcons';
import IconMenu from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

export const HomeIcon = ({color, size}: {color: string; size: number}) => (
  <Icon name="home" size={size} color={color} />
);

export const HistoryIcon = ({color, size}: {color: string; size: number}) => (
  <IconHistory name="history-toggle-off" size={size} color={color} />
);

export const NotificationIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <IconNotification name="notifications-none" size={size} color={color} />;

export const MenuIcon = ({color, size}: {color: string; size: number}) => (
  <IconMenu name="menu" size={size} color={color} />
);
