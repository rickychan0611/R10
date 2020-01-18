import About from './src/pages/About'
import Faves from './src/pages/Faves'
import { YellowBox } from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

 // TODO: Remove when fixed
 YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).'
])

const App = createBottomTabNavigator({
  About,
  Faves,
});

export default createAppContainer(App);