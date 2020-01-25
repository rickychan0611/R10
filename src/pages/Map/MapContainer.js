import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import Map from './Map'
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../apollo'
import TitleHeader from '../../components/TitleHeader'
import { withNavigation } from 'react-navigation';


const MapContainer = () => {
  return (
    <ApolloProvider client={client}>
      <TitleHeader title="Map" />
      <ScrollView style={styles.FavesContainer}>
        <Map />
      </ScrollView>
    </ApolloProvider>
  )
}
export default withNavigation(MapContainer)