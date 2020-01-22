import AsyncStorage from '@react-native-community/async-storage';

addFave = async () => {
  try {
    await AsyncStorage.setItem('FavesSessionIds', 'cjh2j37mo163p01221qpcklry')
  } catch (e) {
    // saving error
  }
  console.log('Done.')
}

addFave()

