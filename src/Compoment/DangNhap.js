import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet,Image,TextInput } from 'react-native'
import { avatarStyle } from '../Css/avatar'
import { ButtonStyle } from '../Css/Button'
import { Inputstyle } from '../Css/TextInput'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default class DangNhap extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    render() {
        return (
           
            <View style={styles.container}>
                <Image style={avatarStyle.avatar}
                    source={require('../Image/avatar.jpg')} />

                <TextInput style={Inputstyle.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#7B7D7D"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />
    
                <TextInput style={Inputstyle.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#7B7D7D"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('TrangChu')}
                    style={ButtonStyle.btn}
                >
                    <View>
                        <Text style={ButtonStyle.textBTN}>Log in</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.ViewTxt}>
                    <Text style={styles.Txtbtn} >Don't you have account? </Text>
                      <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('DangKy')}
                        >
                    <Text style={styles.Txtbtn} >Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:10}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
          <MaterialCommunityIcons name={'gmail'} color={'red'} size={25} />
          <Text style={styles.text}>
             Đăng nhập bằng Gmail
         </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
          <AntDesign name={'facebook-square'} color={'blue'} size={25} />
          <Text style={styles.text}>
            Đăng nhập bằng Facebook
         </Text>
          </View>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#e3e3e3",
    },
    Txtbtn: {
        textAlign: 'center',
        color: "black"
    },
    text: {  
        color: '#000000',
        textAlign: 'center',
        fontSize: 15,
        marginLeft:5,
      },
    ViewTxt: {
        flexDirection: "row",
        marginTop: 30
    }
})
