
import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import { avatarStyle } from '../Css/avatar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ButtonStyle } from '../Css/Button'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation'

const ThongTinCaNhan = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.avatarcontainer}>
                <Image style={avatarStyle.avatar}
                    source={require('../Image/avatar.jpg')} />
                <Text style={{ fontSize: 30 }}>Phùng Gia Hạo</Text>
                <View style={{ flexDirection: 'row', backgroundColor: '#88D42F', borderRadius: 8, justifyContent: 'center' }}>
                    <Ionicons name={'checkmark-circle-outline'} color={'black'} size={20} />
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>Đã Xác Thực</Text>
                </View>
            </View>
            <View style={styles.card}>
            <View style={{flexDirection:'row',justifyContent: 'space-between',margin:5}}>
            <Text style={styles.txtLefttTitle}>Giới Thiệu</Text>
            <Text style={styles.txtRightTitle}>Chỉnh Sửa</Text>
            </View>
            <View style={styles.cardItem}>
            <View style={styles.cardItemLine}>
            <MaterialCommunityIcons name={'cake'} color={'black'} size={20} />
            <Text> Sinh Nhật 25/10/1998</Text>
           </View>
           </View>
           <View style={styles.cardItem}>
            <View style={styles.cardItemLine}>
            <Foundation name={'male-female'} color={'black'} size={20} />
            <Text> Giới Tính Nam </Text> 
           </View>
           </View>
        </View>
        <View style={styles.card}>
            
        <View style={{flexDirection:'row',justifyContent: 'space-between',margin:5}}>
            <Text style={styles.txtLefttTitle}>Thông Tin Cá Nhân</Text>
            <Text style={styles.txtRightTitle}>Chỉnh Sửa</Text>
            </View>

            <View style={styles.cardItem}>
            <View style={styles.cardItemLine}>
            <Ionicons name={'location-outline'} color={'black'} size={20} />
            <Text style> Địa Chỉ:277 Trần Vĩnh Khiết, An Khánh, Ninh Kiều, Cần Thơ</Text>
           </View>
           </View>
           <View style={styles.cardItem}>
            <View style={styles.cardItemLine}>
            <Ionicons name={'phone-portrait-outline'} color={'black'} size={20} />
            <Text> Số Điện Thoại 0948338681</Text>
           </View>
           </View>
           <View style={styles.cardItem}>
            <View style={styles.cardItemLine}>
            <MaterialCommunityIcons name={'gmail'} color={'black'} size={20} />
            <Text> Email 0948338681</Text>
           </View>
           </View>
        </View>
        <View>
            <View style={{marginTop:20}}>
        <TouchableOpacity
                    // onPress={() => this.props.navigation.navigate('')}
                    style={ButtonStyle.btn}
                >
                    <View>
                        <Text style={ButtonStyle.textBTN}>Đăng Xuất</Text>
                    </View>
                </TouchableOpacity>
                </View>
        </View>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e3e3e3',
        
    },
    avatarcontainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        paddingBottom:10,
       
    },
    card: {
      marginTop:10,
      backgroundColor:'white'
     
    },
    cardItem: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom:5,
        
    },
    cardItemLine:{
        flexDirection: 'row',
        margin:5,
        width:'95%',
        alignItems:'center',
        margin:5
    },
    
    txtLefttTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'black',
        fontSize:20,
    },
    txtRightTitle:{
        textAlign: 'left',
       
        color: 'blue',
        fontSize:15,
    }
})
export default ThongTinCaNhan
