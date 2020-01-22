import React, { useState, useCallback, useContext, useEffect } from 'react';
import { FavesContext } from '../../context/FavesContext'

import { View, Text, SectionList, Button, TouchableOpacity } from 'react-native';
import styles from './scheduleStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_SESSIONS } from '../../apollo/queries'
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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

  useEffect(() => {
    if (faveIds.indexOf(item.id) != -1){
      setShow(true)
    } else {
      setShow(false)
    }
  });

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

const Schedules = ({ navigation }) => {
  const [selected, setSelected] = useState(new Map())  
  const onSelect = useCallback(id => {
    const newSelected = new Map(selected) //selected is the state and is a map = (id, boolean)
    //selected is a map, selected.get(id) returns the value of id key, set id is important
    //it looks for the value of that key
    newSelected.set(id, !selected.get(id)) // newSelected is (id, !boolean)
    setSelected(newSelected) //update the state
    // console.log(selected)
  },
    [selected], //rander only selected changes
  )

  const { loading, error, data } = useQuery(GET_ALL_SESSIONS);
  if (error) console.log('error: ' + error)
  if (loading) return <Text>Loading ...</Text>;
  if (!loading && data) {
    let timeArr = []
    for (let i in data.allSessions) {
      timeArr.push(data.allSessions[i].startTime)
    }
    const setUniqueTime = new Set(timeArr)
    const UniqueTimeArr = [...setUniqueTime]
    // console.log(UniqueTimeArr)
    const groupDataByTime = []
    let obj = {}
    let result = []
    let formattedData = []
    for (let j in UniqueTimeArr) {
      obj = {}
      result = data.allSessions.filter(item => {
        return (
          item.startTime == UniqueTimeArr[j]
        )
      })
      obj.title = UniqueTimeArr[j]
      obj.data = result
      formattedData.push(obj)
    }
    // console.log('!!!' + navigation)
    // console.log('ID', navigation.getParam('id'))
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
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            >
            </Item>
          )

          }
          keyExtractor={(item, index) => item + index}
        />
      </>
    )
  }
}
export default withNavigation(Schedules)