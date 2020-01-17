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
  Button,
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

import { r10_logo2x } from '../../../assets/images/'
import { gql } from 'apollo-boost';
import styles from './aboutStyles'
import LinearGradient from 'react-native-linear-gradient'

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

export default About = ({client}) => {
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
              R10 is a conference that focuses on just about any topic related to dev.
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