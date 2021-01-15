
import React, { useState } from 'react'
import { StyleSheet, Text, View, SectionList, FlatList, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HistoryData from '../Data/historyData'
const History = () => {
  const [listH, SetlistH] = useState(HistoryData)
  function mARK(item) {
    if (item == 'Nhập Hàng') {
      return (
        <Ionicons name={'add-outline'} size={20} color={'black'} />
      )
    }
    else {
      return (
        <AntDesign name={'minus'} size={20} color={'black'} />
      )
    }
  }

  function Icon(item) {
    if (item == 'Hoàn thành') {
      return (
        <AntDesign name={'checkcircleo'} size={20} color={'green'} />
      )
    }
    else {
      return (
        <AntDesign name={'minuscircleo'} size={20} color={'red'} />
      )
    }
  }


  _renderItem = ({ item, index, section }) => (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={item}
      renderItem={({ item }) =>
        <View style={styles.containeritem}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: item.id % 2 == 0 ? '#e2e2e3' : '#f3f3f3'
          }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              {Icon(item.Status)}
            </View>
            <View style={{ flex: 3 }}>
              <Text>Tên: {item.Name}</Text>
              <Text>Loại:{item.type}</Text>
              <Text>Ngày: {item.Day}</Text>
              <Text>Trạng Thái:{item.Status}</Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
              {mARK(item.type)}
              <Text>{item.total}</Text>
            </View>
          </View>
        </View>
      } // placed images in my case
    />


  )
  _renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.header}>  {section.title}</Text>
      </View>
    )
  }

  return (

    <View style={styles.container}>
      <SectionList
        sections={listH}
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        keyExtractor={(item, index) => index}
      />
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {

  },
  containeritem: {

    backgroundColor: 'pink',

    margin: 5
  },
  sectionHeader: {
    backgroundColor: '#c2decf',


  },
  header: {
    fontSize: 25,
    fontWeight: 'bold'
  }
})
export default History