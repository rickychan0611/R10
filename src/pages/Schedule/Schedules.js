import React from 'react';
import { Text } from 'react-native';
import styles from './scheduleStyles'
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_SESSIONS } from '../../apollo/queries'
import SessionList from '../../components/SessionList'
import formatData from '../../shared/formatDataForSectionList'

let formattedData = {}

const Schedules = () => {

  const { loading, error, data } = useQuery(GET_ALL_SESSIONS);
  if (error) console.log('error: ' + error)
  if (loading) return <Text>Loading ...</Text>;
  //Reformat the data to fit in SectionList method
  if (!loading && data) {
    formattedData = formatData(data)
  }
    return (
      <>
        <SessionList
          formattedData={formattedData}
          styles={styles}
        />
      </>
    )
}
export default Schedules