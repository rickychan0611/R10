import AsyncStorage from '@react-native-community/async-storage';

const setFave = async (obj) => {
  try {
    let IdArr = {}
    IdArr.value = obj
    await AsyncStorage.setItem('AS_faveIds', JSON.stringify(IdArr))
  } catch (e) {
    console.log(e)
  }
}

export default{
  setFave
}