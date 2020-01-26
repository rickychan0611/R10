import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './androidHeaderStyles'
import { withNavigation } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons'

const TitleHeader = ({ title, navigation }) => {
  console.log(navigation)
  return (
    <>
      <LinearGradient
        colors={['#9E60DB', '#CA3E3E']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        // locations={[0, 1, 1]}
        style={{ height: 70 }}
      >
        <View style={styles.headerContainer}>
            <TouchableOpacity 
            onPress={() => navigation.toggleDrawer()}
            >
          <View style={styles.menuBar}>
              <FontAwesomeIcon icon={faBars} color="white" size={20}/>
          </View>
            </TouchableOpacity>
          <View>
            <Text style={styles.header}>{title}</Text>
          </View>

        </View>
      </LinearGradient>
    </>
  )
}

export default withNavigation(TitleHeader)