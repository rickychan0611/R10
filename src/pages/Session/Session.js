import React, { useState, useCallback } from 'react';
import { View, Text, Button, SectionList, TouchableOpacity } from 'react-native';
import styles from './sessionStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_SESSIONS } from '../../apollo/queries'
import { withNavigation } from 'react-navigation';


const Session = ({navigation}) => {
  const item = navigation.getParam('item')
    return (
      <>
      <Text>
        This is the Session Page
        {JSON.stringify(item)}
      </Text>
      </>
    )
  }


export default withNavigation(Session)
        