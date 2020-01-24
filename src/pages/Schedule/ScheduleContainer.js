import React from 'react';
import { ScrollView } from 'react-native';
import Schedules from './Schedules'
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../apollo'
import TitleHeader from '../../components/TitleHeader'
import styles from './scheduleStyles'


export default ScheduleContainer = () => {
  return (
    <ApolloProvider client={client}>
      <TitleHeader title="Schedule" />
      <ScrollView style={styles.FavesContainer}>
          <Schedules />
      </ScrollView>
    </ApolloProvider>
  )
}