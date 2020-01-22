import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';
import styles from './sessionStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import Speaker from '../Speaker'

const timeFormat = (time) => {
  return (
    new Date(time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  )
}
// const openModal = () => {
//   setModal(true)
// }


const Session = ({ navigation }) => {
  const item = navigation.getParam('item')
  const [modal, setModal] = useState(false)
  
  const closeModal = (props) => {
    setModal(false)
    console.log('close' + props)
  }
  // const { loading, error, data } = 
  //   useQuery(GET_SPEAKER, { variables: { id: "english" }});
  // if (error) console.log('error: ' + error)
  // if (loading) return <Text>Loading ...</Text>;
  // if (!loading && data) {

  // }

  // {JSON.stringify(item.location)}
  return (
    <>
      <ScrollView style={styles.SessionContentContainer}>

        <View style={styles.locationFaves}>

          <View style={styles.locationView}>
            <Text style={styles.location}>
              {item.location}
            </Text>
          </View>

          <View style={styles.HeartContainer}>
            <FontAwesomeIcon icon={faHeart} style={styles.Heart} size={20} />
          </View>

        </View>

        <Text style={styles.title}>
          {item.title}
        </Text>

        <Text style={styles.time}>
          {timeFormat(item.startTime)}
        </Text>

        <Text style={styles.p}>
          {item.description}
        </Text>

        <Text style={styles.location}>
          Presented by:
        </Text>


        <TouchableOpacity
          onPress={() => {
            setModal(true)
          }}>

          <View style={styles.speakView}>
            <View>
              <Image
                source={{ uri: item.speaker.image }}
                style={{ width: 80, height: 80, borderRadius: 400 / 2 }}
              />
            </View>
            <View style={styles.speaker}>
              <Text style={styles.speaker}>
                {item.speaker.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.border}></View>

        <View style={styles.removeButtonContainer}>
          <TouchableOpacity style={styles.button}>
            <LinearGradient colors={['#7B7DD1', '#874AED']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradient}>
              <Text style={styles.text}>Remove from Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </ScrollView>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Speaker speaker={item.speaker} closeModal={closeModal}/>
      </Modal>
    </>
  )
}


export default withNavigation(Session)
