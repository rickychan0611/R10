import React, { useState, useCallback } from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import styles from './scheduleStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_SESSIONS } from '../../apollo/queries'


const timeFormat = ( time ) => {
  return (
    new Date(time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  )
}

const Item = ({ title, id, location, description, startTime, onSelect, selected }) => { //these are props pass from <Item>
  return (
    // <TouchableOpacity
    //   onPress={ () => onSelect(id) } //return true or false for selected (props)
    //   >
    <>
      {/* <View style={styles.timeView}>
        <Text style={styles.time}>
          {timeFormat}
        </Text>
      </View> */}
      <View style={styles.FavesContentContainer}>
        <View style={styles.FavesContent}>
          <Text style={styles.FavesContent}>
            {title}
          </Text>
          <Text style={styles.FavesLocation}>
            {location}
          </Text>
        </View>
        <View style={styles.HeartContainer}>
          <FontAwesomeIcon icon={faHeart} style={styles.Heart} size={20} />
        </View>
      </View>
    </>
    // {selected? <Text style={styles.p}>{description}</Text> : null}
    // </TouchableOpacity>
  )
}

export default Schedules = () => {
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
    // console.log(JSON.stringify(data))


    let timeArr = []
    for (let i in data.allSessions){
      timeArr.push(data.allSessions[i].startTime)
    }
    const setUniqueTime = new Set(timeArr)
    const UniqueTimeArr = [...setUniqueTime]
    // console.log(UniqueTimeArr)
    const groupDataByTime = []
    let obj = {}
    let result = []
    let formattedData = []
    for (let j in UniqueTimeArr){
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
  console.log(formattedData)

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
              id={item.id}
              title={item.title}
              description={item.description}
              startTime={item.startTime}
              location={item.location}
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