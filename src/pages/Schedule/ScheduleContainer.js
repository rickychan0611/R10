import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList
} from 'react-native';

import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../apollo'
import TitleHeader from '../../components/TitleHeader'
import styles from './scheduleStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


export default FavesContainer = () => {
  return (
    <ApolloProvider client={client}>
      <TitleHeader title="Schedule" />
      <ScrollView style={styles.FavesContainer}>
        <View >

          <View style={styles.timeView}>
            <Text style={styles.time}>
              9:00PM
            </Text>
          </View>
          <View style={styles.FavesContentContainer}>
           <View style={styles.FavesContent}>
              <Text style={styles.FavesContent}>
                  Keynote Address
              </Text>
              <Text style={styles.FavesLocation}>
                  Main Hall
              </Text>
            </View>
            <View style={styles.HeartContainer}>
              <FontAwesomeIcon icon={faHeart} style={styles.Heart} size={ 20 } />
            </View>
          </View>

        </View>
      </ScrollView>
    </ApolloProvider>
  )
}