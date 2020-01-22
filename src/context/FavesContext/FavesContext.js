import React, { useState } from "react";

export const FavesContext = React.createContext([{}, () => {}]);

const FavesProvider = ({children}) => {
  const [faveIds, setFaveIds] = useState([])

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