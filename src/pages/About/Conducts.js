import React, { useState, useCallback, useEffect } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
  LayoutAnimation,
  Platform,
  Easing,
  UIManager,
  Animated
} from 'react-native';
import styles from './aboutStyles'

import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_CONDUCTS } from '../../apollo/queries'


if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const animationConfig = {
  duration: 200,
  create: {
    type: 'linear', property: 'scaleXY'
  },
  update: {
    type: 'linear', property: 'scaleY'
  },
  // type: 'spring', springDamping: .8 }, 
  delete: {
    type: 'linear', property: 'opacity'
  },
}

const Item = ({ title, id, description, onSelect, selected }) => { //these are props pass from <Item>
  const [spinValue, setSpinValue] = useState(new Animated.Value(0))

  const rotation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const spin = () => {
    spinValue.setValue(0)
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 600,
        easing: Easing.linear
      }
    ).start()
  }

  return (
    <TouchableOpacity
      onPress={() => {
        onSelect(id)
        LayoutAnimation.configureNext(animationConfig);
        spin()
        // this.setState({expanded: !this.state.expanded});
      }
      } //return true or false for selected (props)
    >
      <View style={{ height: 25 }} />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View>
          <Animated.Text style={{
            fontSize: 24,
            fontFamily: 'Montserrat-Regular',
            color: '#9963EA',
          transform: [{ rotate: rotation }]
          }}>
            {selected ? '-' : '+'}
          </Animated.Text>
        </View>
        <View style={{ width: 10 }} />
        <View>
          <Text style={styles.list}>{title}</Text>
        </View>
      </View>
      {selected ?       
        <Text style={styles.p}>{description}</Text> : null}
    </TouchableOpacity>
  )
}

export default Conducts = () => {
  const [selected, setSelected] = useState(new Map())

  const onSelect = useCallback(id => {
    const newSelected = new Map(selected) //selected is the state and is a map = (id, boolean)
    //selected is a map, selected.get(id) returns the value of id key, set id is important
    //it looks for the value of that key
    newSelected.set(id, !selected.get(id)) // newSelected is (id, !boolean)
    setSelected(newSelected) //update the state
  },
    [selected], //rander only selected changes
  )

  const { loading, error, data } = useQuery(GET_ALL_CONDUCTS);
  if (error) console.log('error: ' + error)
  if (loading) return <Text>Loading ...</Text>;
  if (!loading && data) {
    return (
      <>
        <FlatList
          data={data.allConducts}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              description={item.description}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
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