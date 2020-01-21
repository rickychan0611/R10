import About from './src/pages/About'
import Faves from './src/pages/Faves'
import Schedule from './src/pages/Schedule'
import Session from './src/pages/Session'

import { YellowBox, StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';


 // TODO: Remove when fixed
 YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).'
])

const ScheduleStack = createStackNavigator(
  {
    Schedule,
    Session
  }, 
  {
    mode: 'float',
    headerMode: 'none'
    }
);

const BottomNav = createBottomTabNavigator({
  Schedule: {
    screen: ScheduleStack
  },
    Faves,
    About,
    Session
},
StatusBar.setBarStyle('light-content', true)
);

const App = createAppContainer(BottomNav);

export default App

