/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StackScreen from './src/Navigation/StackScreen'
import OneSignal from 'react-native-onesignal';
import Sendpush from './src/Compoment/Sendpush';





export default class App extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
        isSubscribed: false,
        requiresPrivacyConsent: false,
        isLocationShared: false,
        inputValue: "",
        consoleValue: ""
    }
 
  }
 async componentDidMount(){
    OneSignal.setAppId('98bfbb11-bc35-400b-940e-8d6b51dd2866');
    OneSignal.setRequiresUserPrivacyConsent(this.state.requiresPrivacyConsent);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      this.OSLog("Prompt response:", response);
  });
    
  }
  componentWillUnmount() {
   
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('openResult: ', openResult);
  }
  render() {
    return (
      <View style={styles.container}>
        <StackScreen/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})  

  