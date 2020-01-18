import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { Text } from 'react-native';
import styles from './headerStyles'
export default TitleHeader = ({title}) => {
  return (
    <LinearGradient
        colors={['#9E60DB', '#CA3E3E']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        // locations={[0, 1, 1]}
        style={{height: 100}}
      >
        <Text style={styles.header}>{title}</Text>
      </LinearGradient>
  )
}