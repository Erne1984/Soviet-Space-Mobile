import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'; 

import Home from './views/home/home';
import Discovery from './views/discovery/discovery';
import Profile from './views/profile/Profile';
import About from './views/about/about';
import Settings from './views/settings/settings';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ffd64a",
        tabBarStyle:{
          borderTopWidth: 0,
          marginBottom: 2,
          marginTop: 5
        },
        tabBarLabelStyle:{
          marginBottom: 5,
          marginTop: 5
        }
      }}>
      <Tab.Screen 
        name="Início" 
        component={Home}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name='home' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Obras" 
        component={Discovery} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name='search' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Ilustres" 
        component={Profile} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name='person' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Sobre" 
        component={About} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name='information-circle' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Configurações" 
        component={Settings} 
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name='settings' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
