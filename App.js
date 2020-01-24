import React, {useEffect, useContext} from "react";
import About from './src/pages/About'
import Faves from './src/pages/Faves'
import Schedule from './src/pages/Schedule'
import Session from './src/pages/Session'

import { YellowBox, StatusBar, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import AsyncStorage from '@react-native-community/async-storage';
import { FavesContext } from './src/context/FavesContext'
import FavesProvider from './src/context/FavesContext'

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
  Faves,
  Schedule: {
    screen: ScheduleStack
  },
  About,
  Session
},
StatusBar.setBarStyle('light-content', true)
);

const AppNavigation = createAppContainer(BottomNav);
const App = () => {
  // const [faveIds, setFaveIds] = useContext(FavesContext)

return(
    <FavesProvider>
      <AppNavigation />
    </FavesProvider>
  )}
export default App

