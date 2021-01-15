import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ButtonStyle } from '../Css/Button';
import { Inputstyle } from '../Css/TextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default class DangKy extends Component {
    constructor(props) {
        super(props);
        this.state = {
          your_name: '',
          email: '',
          password: '',
    
        };
      }
      handleYourName = (text) => {
        this.setState({ your_name: text })
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
            <View style={{ marginTop: 20 }}></View>
            <TextInput style={Inputstyle.input}
              underlineColorAndroid="transparent"
              placeholder="Your Name"
              placeholderTextColor="#7B7D7D"
              autoCapitalize="none"
              onChangeText={this.handleYourName} />
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
              style={ButtonStyle.btn}
              onPress={() => this.props.navigation.navigate('Dangky')}
            >
              <View>
                <Text style={ButtonStyle.textBTN}>Join Us</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>
              By Pressing 'Join Us' ,you argee to our terms & conditions
                 </Text>
         
    
          </View>
        );
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
      text: {
        margin: 15,
        color: '#000000',
        textAlign: 'center',
        fontSize: 15,
        justifyContent: 'center'
      },
    })  

