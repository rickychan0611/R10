import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import styles from './speakerStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated';

const Speaker = ( {speaker, closeModal}) => {
  
  const onClose = () => {
    closeModal(false)
  }

  return (
    <>
      <ScrollView style={styles.SpeakerContainer}>

        <View style={styles.Header}>
          <View style={styles.title}>
            <Text style={styles.title}>About the Speaker</Text>
          </View>
          <View style={styles.closeView}>
              <TouchableOpacity 
              onPress={() => {
                onClose()
              }}>
                <FontAwesomeIcon 
                icon={faTimes} 
                color="white"
                size={25} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.contentContainer}>
            <Image
                source={{ uri: speaker.image }}
                style={{ width: 140, height: 140, borderRadius: 400 / 2 }}
              />
            <Text style={styles.name}>
              {speaker.name}
            </Text>
            <Text style={styles.p}>
              {speaker.bio}
            </Text>
            <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.button}
          onPress={() => {
            Linking.openURL(speaker.url)
          }}>
            <LinearGradient colors={['#7B7DD1', '#874AED']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradient}>
              <Text style={styles.text}>Read more on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        </View>
      </ScrollView>
    </>
  )
}

export default Speaker