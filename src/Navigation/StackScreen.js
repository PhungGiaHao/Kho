import React, { Component } from 'react'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import Feather from 'react-native-vector-icons/Feather'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import MoDau from '../Compoment/MoDau';
import DangNhap from '../Compoment/DangNhap';
import DangKy from '../Compoment/DangKy';
import TabScreen from './TabScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScanQR from '../Compoment/ScanQR';
const Stack = createStackNavigator();
function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'TrangChu';
    switch (routeName) {
        case "TrangChu":
            return "Trang Chủ";
        case "LichSu":
            return "Lịch Sử";
        case "KhoSanPham":
            return "Sản Phẩm";
        case "ThongTinCaNhan":
            return "Thông Tin Cá Nhân";
    }

}
function IconBadge(route) {
    let a = getFocusedRouteNameFromRoute(route) ?? 'TrangChu';
    if (a == "TrangChu") {
        return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
                <Ionicons name={'md-notifications'} size={24} />
                <View
                    style={{
                        position: 'absolute',
                        right: -3,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 6,
                        width: 12,
                        height: 12,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>3</Text>
                </View>
            </View>
        )
    }
}
const StackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    gestureDirection: "horizontal",
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
                headerMode="float"
                animation="fade"
            >
                <Stack.Screen
                    name='MoDau'
                    component={MoDau}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='DangKy'
                    component={DangKy}
                    options={{
                        title: 'Đăng Ký',
                        headerTitleAlign: 'center',
                        headerTintColor: '#00CC88',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            textAlign: 'center',
                            color: 'black'
                        },
                        headerStyle: {
                            backgroundColor: '#e3e3e3',
                            elevation: 0, // remove shadow on Android
                            shadowOpacity: 0, // remove shadow on iOS
                        },
                    }}
                />
                <Stack.Screen
                    name='DangNhap'
                    component={DangNhap}
                    options={{
                        headerLeft: null,
                        title: 'Đăng Nhập',
                        headerTitleAlign: 'center',
                        headerTintColor: '#00CC88',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            textAlign: 'center',
                            color: 'black'
                        },
                        headerStyle: {
                            backgroundColor: '#e3e3e3',
                            elevation: 0, // remove shadow on Android
                            shadowOpacity: 0, // remove shadow on iOS
                        },
                    }}
                />
                <Stack.Screen
                    name='TrangChu'
                    component={TabScreen}
                    options={({ route, navigation }) => ({
                        title: getHeaderTitle(route),
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            IconBadge(route)
                        ),
                        headerLeft: null,
                        headerTintColor: '#00CC88',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            fontWeight: 'bold',
                            color: 'black'
                        },
                        shadowRadius: 0,
                        headerStyle: {
                            elevation: 0, // remove shadow on Android
                            shadowOpacity: 0, // remove shadow on iOS
                            backgroundColor: 'white',
                        },
                        cardStyle: {
                            backgroundColor: '#FFFFFF'
                        }
                    })}

                />

                <Stack.Screen
                    name='ScanQR'
                    component={ScanQR}
                    options={{

                        title: 'Quét Mã',
                        headerTitleAlign: 'center',
                        headerTintColor: '#00CC88',
                        headerTitleStyle: {
                            alignSelf: 'center',
                            textAlign: 'center',
                            color: 'black'
                        },
                        headerStyle: {
                            backgroundColor: '#e3e3e3',
                            elevation: 0, // remove shadow on Android
                            shadowOpacity: 0, // remove shadow on iOS
                        },
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreen
