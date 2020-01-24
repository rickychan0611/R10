const formatDataForSectionList = (data) => {
  let timeArr = []
    for (let i in data.allSessions) {
      timeArr.push(data.allSessions[i].startTime)
    }
    const setUniqueTime = new Set(timeArr)
    const UniqueTimeArr = [...setUniqueTime]
    let obj = {}
    let result = []
    let formattedData = []
    for (let j in UniqueTimeArr) {
      obj = {}
      result = data.allSessions.filter(item => {
        return (
          item.startTime == UniqueTimeArr[j]
        )
      })
      obj.title = UniqueTimeArr[j]
      obj.data = result
      formattedData.push(obj)
    }
    return formattedData
}

export default formatDataForSectionList