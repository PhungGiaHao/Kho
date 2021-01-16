import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'
import { ButtonStyle } from '../Css/Button'
const win = Dimensions.get('window');
export default class MoDau extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}> Quản Lý Kho Hàng </Text>
            <Image style={styles.img}
                resizeMode={'contain'}
                source={require('../Image/Onboard.png')} />
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DangNhap')}
                style={ButtonStyle.btn}>
                <View>
                    <Text style={ButtonStyle.textBTN}>Get Started</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
}
const styles = StyleSheet.create({
container: {
    flex:1, 
    backgroundColor:'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
},
title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginTop:20

},
img: {
    width: '100%',
    height: win.height*0.6
},
text: {
    marginTop: 5,
    color: '#7B7D7D',
    textAlign: 'center',
    fontSize: 20,
},
})