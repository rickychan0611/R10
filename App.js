import React from 'react';
import About from './src/pages/About'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  SectionList,
  FlatList,
  Button,
  StatusBar,
} from 'react-native';

import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://r10.academy.red/graphql/'
});

const client = new ApolloClient({
  cache,
  link
});

const App = () => {
  return (
    <>
      <About client={client}/>
    </>
  )
}

export default App;