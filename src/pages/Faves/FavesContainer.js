import React from 'react';
import { ScrollView } from 'react-native';

import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../apollo'
import TitleHeader from '../../components/TitleHeader'
import styles from './favesStyles'

import Faves from './Faves'

export default FavesContainer = () => {
  return (
    <ApolloProvider client={client}>
      <TitleHeader title="Faves" />
      <ScrollView style={styles.FavesContainer}>
        <Faves />
      </ScrollView>
    </ApolloProvider>
  )
}