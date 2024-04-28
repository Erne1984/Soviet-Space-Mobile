import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './views/home/home';
import Discovery from './views/discovery/discovery';
import Profile from './views/profile/Profile';
import About from './views/about/about';
import Settings from './views/settings/settings';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discovery" component={Discovery} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default MyTabs;