import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Platform } from 'react-native'

if (Platform.OS === 'android') { //add Javascript Date function to android
  require('intl');
  require('intl/locale-data/jsonp/en-US');
  require('date-time-format-timezone');
  Intl.__disableRegExpRestore();/*For syntaxerror invalid regular expression unmatched parentheses*/
}

AppRegistry.registerComponent(appName, () => App);
