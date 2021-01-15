import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const win = Dimensions.get('window');
export default class TrangChu extends Component {
    render() {
        return (
          <View style={styles.container}>
           
            
            <Text style={styles.txt_title}> Báo Cáo Doanh Thu </Text>
            <Image style={styles.imgdoanhso}
                resizeMode={'contain'}
                source={require('../Image/bieudo.png')} />
            <View>
              <Text style={styles.txt_title}>Danh Sách Chức Năng</Text>
              </View>
            <View>
            
              <View style={{ marginBottom: 30 }}>
                <View style={styles.containericon}>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center',flex:1 }}>
                    <View style={styles.icon}>
            
                      <AntDesign name={'appstore-o'} color={'#3486B8'} size={25} />
                    
                    </View>
                    <Text style={{ fontWeight: 'normal',width:'100%',textAlign:'center', }}>Dịch Vụ</Text>
                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,flex:1}}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons name={'truck-delivery-outline'} color={'#3486B8'} size={25} />
                    </View>
                    <Text style={{ fontWeight: 'normal',width:'100%',textAlign:'center' }}>Vận Chuyển </Text>
                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,flex:1}}>
                    <View style={styles.icon}>
                      <AntDesign name={'link'} color={'#3486B8'} size={25} />
                    </View>
                    <Text style={{ fontWeight: 'normal',width:'100%' ,textAlign:'center'}}>Liên Kết</Text>
                  </View>
                  
                </View>
                <View style={styles.containericon}>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,flex:1}}>
                      <TouchableOpacity
                      onPress ={()=>this.props.navigation.navigate('ScanQR')}
                      >
                    <View style={styles.icon}>
                      <FontAwesome name={'qrcode'} color={'#3486B8'} size={25} />
                    </View>
                    <Text style={{ fontWeight: 'normal',textAlign:'center', }}>Quét Qr</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,flex:1 }}>
                    <View style={styles.icon}>
                      <AntDesign name={'solution1'} color={'#3486B8'} size={25} />
                    </View>
                    <Text style={{ fontWeight: 'normal' ,width:'100%',textAlign:'center'}}>Thuế</Text>
                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  ,flex:1}}>
                    <View style={styles.icon}>
                      <AntDesign name={'areachart'} color={'#3486B8'} size={25} />
                    </View>
                    <Text style={{ fontWeight: 'normal',width:'100%',textAlign:'center' }}>Doanh Thu</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
    
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        backgroundColor: "white",
        flex:1
        
      },
      ViewImg: {
        marginLeft: 10,
        marginTop: 5
      },
      img: {
        borderRadius: 5,
        width: win.width * 0.6,
        height: win.height * 0.2
      },
      txt_img: {
        textAlign: 'left',
        fontSize: 17,
        fontWeight: 'normal'
      },
      txt_price: {
        fontWeight: 'bold'
      },
      txt_title: {
        fontWeight: 'bold',
        marginLeft: 5,
        fontSize: 15,
        marginTop:5
      },
      containericon: {
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      imgdoanhso:{
        width: '100%',
        flex:1
      },
      icon: {
        
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#edfff4',
        borderRadius: (win.width*0.4)/2,
        margin: 5,
        width: win.width*0.2,
        height: win.height*0.12,
      }
    })
    
