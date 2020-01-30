import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './iosHeaderStyles'
import { withNavigation } from 'react-navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const TitleHeader = ({ title, navigation }) => {
  return (
    <>
      <LinearGradient
        colors={['#9E60DB', '#CA3E3E']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        // locations={[0, 1, 1]}
        style={{ height: 100 }}
      >
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.header}>{title}</Text>
          </View>

          {(title == "Session")? 
          <View style={styles.backView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <FontAwesomeIcon icon={faChevronLeft} color="white" size={30}/>
            </TouchableOpacity>
          </View>
           : null }

        </View>
      </LinearGradient>
    </>
  )
}

export default withNavigation(TitleHeader)