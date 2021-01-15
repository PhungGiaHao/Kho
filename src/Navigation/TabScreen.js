import React from 'react'
import { View, Text } from 'react-native'
import History from '../Compoment/History';
import KhoSanPham from '../Compoment/KhoSanPham';
import ThongTinCaNhan from '../Compoment/ThongTinCaNhan';
import TrangChu from '../Compoment/TrangChu';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTabNavigatoStack = createBottomTabNavigator();
const TabScreen = () => {
    return (
        <BottomTabNavigatoStack.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'TrangChu') {
                iconName = focused ? 'home' : 'home';
                return <FontAwesome name={iconName} size={25} color={color} />;
              } else if (route.name === 'LichSu') {
                iconName = focused ? 'history' : 'history';
                return <MaterialCommunityIcons name={iconName} size={25} color={color} />;
              }
              else if (route.name === 'KhoSanPham') {
                iconName = focused ? 'search' : 'search';
                return <EvilIcons name={iconName} size={25} color={color} />;
              }
              else if (route.name === 'ThongTinCaNhan') {
                iconName = focused ? 'ellipsis1' : 'ellipsis1';
                return <AntDesign name={iconName} size={25} color={color} />;
              }
              // You can return any component that you like here!
            },
          })}
          tabBarOptions={{
            style: {
              borderTopWidth: 0,
              backgroundColor: 'white',
              paddingBottom: 5,
              shadowOpacity: 0,
              elevation: 0,
              
    
              // remove shadow on Android
            },
    
            showLabel: false,
            activeTintColor: '#37E189',
    
    
          }}
        >

       <BottomTabNavigatoStack.Screen name='TrangChu' component={TrangChu} />
      <BottomTabNavigatoStack.Screen name='LichSu' component={History} />
      <BottomTabNavigatoStack.Screen name='KhoSanPham' component={KhoSanPham} />
      <BottomTabNavigatoStack.Screen name='ThongTinCaNhan' component={ThongTinCaNhan} />
        </BottomTabNavigatoStack.Navigator>
    )
}

export default TabScreen


