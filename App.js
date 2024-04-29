import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './Routes'

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}