import React, { useState } from 'react';
import Conducts from './Conducts'
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

import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import client from '../../apollo/'

import LinearGradient from 'react-native-linear-gradient'
import { r10_logo2x } from '../../../assets/images/'
import styles from './aboutStyles'

export default About = () => {
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

        <View style={styles.buttomLine}/>
        <Text style={styles.p}>
        © Red Academy 2020
        {"\n"}
        </Text>
      </ScrollView>
      </ApolloProvider>
    </>
  )
}