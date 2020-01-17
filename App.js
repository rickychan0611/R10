/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  SectionList,
  FlatList,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import About from './src/pages/About/'
import { r10_logo2x } from './assets/images'
import { gql } from 'apollo-boost';

import LinearGradient from 'react-native-linear-gradient'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://r10.academy.red/graphql/'
});

const client = new ApolloClient({
  cache,
  link
});

const GET_ALL_CONDUCTS = gql`
  query {
    allConducts {
      id
      description
      title
      order
    }
  }
`;

const Conducts = () => {
  const { loading, error, data } = useQuery(GET_ALL_CONDUCTS);
  if (error) console.log('error: ' + error)
  if (loading) return <Text>Loading ...</Text>;
  if (!loading && data) { 
  return (
      <>
        <FlatList
          data={data.allConducts}
          renderItem={({ item }) =>   
            <Text style={styles.list}>+ {item.title}</Text>}
          keyExtractor={item => item.id}
        />
      </>
    )
  }
}

const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
          <LinearGradient
            colors={['#9E60DB', '#CA3E3E']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            // locations={[0, 1, 1]}
            style={styles.headerView}
          >
            <Text style={styles.header}>About</Text>
          </LinearGradient>

          <ScrollView style={styles.container}>

            <View style={styles.logoView}>
              <Image style={styles.logo} source={r10_logo2x}></Image>
            </View>

          <View >
            <Text style={styles.p}>
              xR10 is a conference that focuses on just about any topic related to dev.
            </Text>
            <Text style={styles.title}>
              Date & Venue
            </Text>
            <Text style={styles.p}>
              The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.
          </Text>
          </View>

          <View style={styles.ConductContent}>
          <Text style={styles.title}>Code of Conduct</Text>
            <Conducts />
          </View>

        </ScrollView>
      </ApolloProvider>
    </>
  )
}

const styles = {
  headerView: {
    height: 100
  },
  title: {
    fontSize: 30,
    // marginBottom: 5,
    fontFamily: 'Montserrat-Regular',
  },
  p: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 24,
    fontFamily: 'Montserrat-Light',
    lineHeight: 30,
  },
  container: {
    // marginTop: 48,
    flex: 1,
    padding: 20
  },
  header: {
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: 'center',
    marginTop: 45,
    fontFamily: 'Montserrat-Regular',
  },
  list: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    marginTop: 22,
    color: '#9963EA',
  },
  logoView: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    height: 105
  },
  logo: {
    width: 250,
    resizeMode: 'contain'
  },
  ConductContent: {
    flex: 3,
  },
  content: {
    fontSize: 24,
  }
}

export default App;