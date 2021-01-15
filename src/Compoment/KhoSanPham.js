import React, { Component, useState } from 'react'
import product from '../Image/product.jpg'
import {
  FlatList,
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity
} from 'react-native';
import ProductArray from '../Data/Item'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Ionicons from 'react-native-vector-icons/Ionicons'

const KhoSanPham = () => {


  const [listItems, setListItems] = useState(ProductArray);
  const [search, setSearch] = useState('');
  const [dragX, setdragX] = useState('');
  const rightSwipe = (progress, dragX, id) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => deleteItem(id)}
        >
          <View style={styles.deleteBox}>
            <Animated.Text style={styles.textAction, { transform: [{ scale: scale }] }}>
              Xóa
          </Animated.Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => alert('nhập')}
        >
          <View style={styles.importBox}>
            <Animated.Text style={styles.textAction, { transform: [{ scale: scale }] }}>
              Nhập
          </Animated.Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=>deleteItem(id)}
        >
        <View style={styles.deleteBox}>
          <Animated.Text style={styles.textAction,{transform: [{scale: scale}]}}>
            Xuất
          </Animated.Text>
        </View>
        </TouchableOpacity> */}
        {/* //////////// */}
        {/* <TouchableOpacity
        activeOpacity={0.6}
        onPress={()=>deleteItem(id)}
        >
        <View style={styles.deleteBox}>
          <Animated.Text style={styles.textAction,{transform: [{scale: scale}]}}>
            Sửa
          </Animated.Text>
        </View>
        </TouchableOpacity> */}
      </>
    );
  };

  const deleteItem = (id) => {

    setListItems(ProductArray.slice().filter((item) => item.id !== id));

  };
  const ItemView = ({ item }) => {
    return (
      // FlatList Item
      <Swipeable
        renderRightActions={(progress, dragX) => rightSwipe(progress, dragX, item.id)}
      >
        <View style={styles.containerItem}>

          <View>
            <Image style={styles.imageitem}
              resizeMode={'contain'}
              source={require('../Image/product.jpg')} />
          </View>
          <View style={{ flex: 1 }}>

            <Text style={styles.Txtitem}>
              - Tên: {item.Name}

            </Text>
            <Text style={styles.Txtitem}>
              - Giá: {item.price} $
            </Text>
            <Text style={styles.Txtitem}>
              - Số Lượng Trong Kho: {item.total}
            </Text>
            <Text style={styles.Txtitem}>
              - {item.description}
            </Text>
          </View>

        </View>
      </Swipeable>
    );
  };
  const searchFilterFunction = (text) => {
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = listItems.filter(
        function (item) {
          const itemData = item.Name
            ? item.Name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });

      setListItems(newData);
      setSearch(text);
    }
    else {

      setListItems(ProductArray);
      setSearch(text);
    }
  };
  return (

    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
        <TextInput
          style={styles.textInputSearchStyle}
          clearButtonMode='always'
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Tìm Kiếm"
        />
        <Ionicons name={'add-circle-outline'} color={'#3486B8'} size={40} />
      </View>
      <FlatList
        data={listItems}
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  containerItem: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    height: 100,
  },
  imageitem: {
    height: 80,
    width: 80,
  },
  Txtitem: {

    fontSize: 10,

  },
  textInputSearchStyle: {
    flexDirection: 'row',
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue'
  },
  deleteBox: {
    justifyContent: 'center',
    backgroundColor: '#dd2c00',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginTop: 10,
  },
  importBox: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginTop: 10,
  },
  textAction: {
    textAlign: 'center'
  }
});


export default KhoSanPham


