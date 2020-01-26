import React from 'react';
// import Styled from 'styled-components/native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Text, View} from 'react-native'
import styles from './mapstyles'
import { map_pin } from '../../../assets/images/'

const marker = {
  latlng: {
    latitude: 49.263551, 
    longitude:  -123.138128,
  }
}

const Map = () => {
  return (
    <>
    <View style={styles.mapContainer}>
    <MapView
      provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 49.263551, 
          longitude:  -123.138128,
          latitudeDelta: .005,
          longitudeDelta: 0.005,
        }}
        // 49.2633514,-123.1403165,17z
      >    
      <Marker
        coordinate={marker.latlng}
        image={require('../../../assets/images/map_pin.png')}
      />
      </MapView>
      </View>
    </>
  );
};

export default Map;