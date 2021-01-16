/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';




PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
    },
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios'
  });
AppRegistry.registerComponent(appName, () =>gestureHandlerRootHOC(App));
