import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-community/async-storage';
export const FavesContext = React.createContext([{}, () => { }]);
import models from '../../config/models';

const FavesProvider = ({ children }) => {
  const [faveIds, setFaveIds] = useState([])
  useEffect(() => {
    // ComponentDidMount
    (async () => {
      try {
        let result = await AsyncStorage.getItem('AS_faveIds')
        if (result !== null) {
          setFaveIds(JSON.parse(result).value)
        }
      } catch (e) {
        console.log(e)
      }
    })();
  }, []);

  return (
    <FavesContext.Provider
      value={[faveIds, setFaveIds]}>
      {children}
    </FavesContext.Provider>
  )
}
export default FavesProvider


  // const setFave = (value) => {
  //   setFavesIds([...faveIds, value])
  //   console.log('setFave: ' + faveIds)
  // }