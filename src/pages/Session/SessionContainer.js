import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import Session from './Session'
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../apollo'
import TitleHeader from '../../components/TitleHeader'
import styles from './sessionStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { withNavigation } from 'react-navigation';


const ScheduleContainer = () => {
  return (
    <ApolloProvider client={client}>
      <TitleHeader title="Session" />
      <ScrollView style={styles.FavesContainer}>
        <Session />
      </ScrollView>
    </ApolloProvider>
  )
}
export default withNavigation(ScheduleContainer)