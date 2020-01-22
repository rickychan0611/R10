import AsyncStorage from '@react-native-community/async-storage';

addFave = async () => {
  try {
    await AsyncStorage.setItem('FavesIds', '1')
  } catch (e) {
    // saving error
  }
  console.log('Done.')
}

