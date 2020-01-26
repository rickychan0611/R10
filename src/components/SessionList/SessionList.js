import React, { useState, useCallback, useContext, useEffect } from 'react';
import { FavesContext } from '../../context/FavesContext'

import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import styles from './sessionListStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { withNavigation } from 'react-navigation';

const timeFormat = (time) => {
  return (
    new Date(time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  )
}

const Item = ({ navigation, item, onSelect, selected }) => { //these are props pass from <Item>
  // const { navigate } = useNavigation()
  const [faveIds, setFaveIds] = useContext(FavesContext)
  const [show, setShow] = useState(false)

  //shows the heart
  useEffect(() => {
    if (faveIds.indexOf(item.id) != -1){
      setShow(true)
    } else {
      setShow(false)
    }
  })
  
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          if (item.title == "Lunch" || item.title == "After Party") {
            return 
          } else {
          navigation.navigate('Session', { 'item': item })}}}
      >
        <View style={styles.FavesContentContainer}>
          <View style={styles.FavesContent}>

            <Text style={styles.FavesContent}>
              {item.title}
            </Text>
            <Text style={styles.FavesLocation}>
              {item.location}
            </Text>
          </View>
          <View style={styles.HeartContainer}>
            {show ?
            <FontAwesomeIcon icon={faHeart} style={styles.Heart} size={20} />
           : null}
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

const SessionList = ({formattedData, item, styles, navigation}) => {
  return (
    <>
        <SectionList
          sections={formattedData}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.timeView}>
              <Text style={styles.time}>
                {timeFormat(title)}
              </Text>
            </View>
          )}
          renderItem={({ item }) => (
            <Item
              navigation={navigation}
              item={item}
              // selected={!!selected.get(item.id)}
              // onSelect={onSelect}
            >
            </Item>
          )
          }
          keyExtractor={(item, index) => item + index}
        />
    </>
  )
}

export default withNavigation(SessionList)