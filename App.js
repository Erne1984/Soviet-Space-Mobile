import React from 'react';
import { Appearance, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './Routes'

const colorScheme = Appearance.getColorScheme();

if (colorScheme === 'dark') {
  StatusBar.setBarStyle('light-content'); 
} else {
  StatusBar.setBarStyle('dark-content');  
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}