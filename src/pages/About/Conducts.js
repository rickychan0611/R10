import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './aboutStyles'

import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_CONDUCTS } from '../../apollo/queries'

const Item = ({ title, id, description, onSelect, selected }) => { //these are props pass from <Item>
  return (
    <TouchableOpacity
      onPress={ () => onSelect(id) } //return true or false for selected (props)
      >
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 25 }}>
          <Text style={styles.list}>
            {selected? '-' : '+'}</Text>
        </View>
        <View>
          <Text style={styles.list}>{title}</Text>
        </View>
      </View>
      {selected? <Text style={styles.p}>{description}</Text> : null}
    </TouchableOpacity>
  )
}

export default Conducts = () => {
  const [selected, setSelected] = useState(new Map())

  const onSelect = useCallback (id => {
    const newSelected = new Map(selected) //selected is the state and is a map = (id, boolean)
    //selected is a map, selected.get(id) returns the value of id key, set id is important
    //it looks for the value of that key
    newSelected.set(id, !selected.get(id)) // newSelected is (id, !boolean)
    setSelected(newSelected) //update the state
    // console.log(selected)
  },
    [selected], //rander only selected changes
  )

  const { loading, error, data } = useQuery(GET_ALL_CONDUCTS);
  if (error) console.log('error: ' + error)
  if (loading) return <Text>Loading ...</Text>;
  if (!loading && data) {
    // console.log(JSON.stringify(data))
    return (
      <>
        <FlatList
          data={data.allConducts}
          renderItem={({ item }) => (
            <Item
              id = {item.id}
              title = {item.title}
              description = {item.description}
              selected = {!!selected.get(item.id)}
              onSelect = {onSelect}
              >
            </Item>
          )

          }
          keyExtractor={item => item.id}
        />
      </>
    )
  }
}