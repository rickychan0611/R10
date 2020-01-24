import React, {useContext, useEffect} from 'react';
import { Text } from 'react-native';
import styles from '../Schedule/scheduleStyles'
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_SESSIONS } from '../../apollo/queries'
import SessionList from '../../components/SessionList'
import formatData from '../../shared/formatDataForSectionList'
import { FavesContext } from '../../context/FavesContext'
import AsyncStorage from '@react-native-community/async-storage';

let formattedData = {}
let result = {}

const Faves = () => {
  const [faveIds, setFaveIds] = useContext(FavesContext)

  const { loading, error, data } = useQuery(GET_ALL_SESSIONS);
  if (error) console.log('error: ' + error)
  if (loading) return <Text>Loading ...</Text>;
  //Reformat the data to fit in SectionList method
  if (!loading && data) {
    result.allSessions = data.allSessions.filter(session => {
      return faveIds.includes(session.id)
    })
    formattedData = formatData(result)
  }

  // const [faveIds, setFaveIds] = useContext(FavesContext)

    return (
      <>
        <SessionList
          formattedData={formattedData}
          styles={styles}
        />
      </>
    )
}
export default Faves