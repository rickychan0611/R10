import React, {useEffect, useContext} from "react";
import About from './src/pages/About'
import Faves from './src/pages/Faves'
import Schedule from './src/pages/Schedule'
import Session from './src/pages/Session'
import Map from './src/pages/Map'

import { YellowBox, StatusBar, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import AsyncStorage from '@react-native-community/async-storage';
import { FavesContext } from './src/context/FavesContext'
import FavesProvider from './src/context/FavesContext'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt, faHeart, faMap, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

 // TODO: Remove when fixed
 YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
'Calling bridge.imageLoader is deprecated and will not work in newer versions of RN. Please update to themoduleForClass API or turboModuleLookupDelegate API'
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

const IconComponent = props => {
  return(
    <FontAwesomeIcon icon={faHeart} style={styles.Heart} size={20} />
  )
}

const BottomNav = createBottomTabNavigator({
  Schedule: {
    screen: ScheduleStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon={faCalendarAlt} color={tintColor} size={30} />
        ),
      },
    },
    Map:{
      screen: Map,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faMap} color={tintColor} size={30} />
        ),
      },
    },
    Faves:{
      screen: Faves,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faHeart} color={tintColor} size={30} />
        ),
      },
    },
    About: {
      screen : About,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faExclamationCircle} color={tintColor} size={30} />
        ),
      },
    }
},
{
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 16,
      margin: 10
    },
    style: {
      backgroundColor: 'black',
      color: 'white',
      height: 110,
      paddingBottom: 30,
      paddingTop: 15,
    },
    safeAreaInset: {
      bottom: 'never'
    },
  },
},
StatusBar.setBarStyle('light-content', true)
);

const AppNavigation = createAppContainer(BottomNav);
const App = () => {
return(
    <FavesProvider>
      <AppNavigation />
    </FavesProvider>
  )}
export default App

