import PushNotification from "react-native-push-notification";
 const showPushNotification =( title,message) => {
    PushNotification.localNotification({
        title:title,
        message:message
        })
 }

 
 export {showPushNotification}