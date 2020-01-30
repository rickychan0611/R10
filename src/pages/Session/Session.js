import React, { useState, useContext, useEffect } from 'react';
import { FavesContext } from '../../context/FavesContext'
import { View, Text, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import styles from './sessionStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import Speaker from '../Speaker'
import models from '../../config/models';
import timeFormat from '../../shared/timeFormat'

const Session = ({ navigation }) => {
  const item = navigation.getParam('item')
  const [modal, setModal] = useState(false)
  const [faveIds, setFaveIds] = useContext(FavesContext)
  
  const closeModal = (props) => {
    setModal(false)
  }

  return (
    <>
      <ScrollView style={styles.SessionContentContainer}>
        <View style={styles.locationFaves}>

          <View style={styles.locationView}>
            <Text style={styles.location}>
              {item.location}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // setFaveIds([])
              if (faveIds.indexOf(item.id) == -1 ) {
              setFaveIds([...faveIds, item.id])
            }
            models.setFave([...faveIds, item.id])
          }}
          >

          <View style={styles.HeartContainer}>
            {(faveIds.indexOf(item.id) == -1 )?
            <FontAwesomeIcon icon={emptyHeart} style={styles.Heart} size={20} /> :
            <FontAwesomeIcon icon={faHeart} style={styles.Heart} size={20} />
          }
          </View>
          </TouchableOpacity>

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
          <TouchableOpacity style={styles.button}
          onPress={()=>{
            let tempArr = faveIds
            tempArr.map((id, index)=>{
            if (id === item.id){
              tempArr.splice(index,1)
              setFaveIds([])
              setFaveIds([...tempArr])
              models.setFave([...tempArr])
            }
          })}}>
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
