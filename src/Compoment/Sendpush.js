import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity, } from 'react-native'
import { ButtonStyle } from '../Css/Button'
import { Inputstyle } from '../Css/TextInput'

const Sendpush = () => {
const [textTitlePush, settextTitlePush] = useState('');
  const [textNotificationContent,setNotificationContent] = useState('');
 const handlePush =() => {
    const requestPushOption = {
        method: 'POST',
        headers: { 
        'Authorization':'Basic Zjg5MzcwZmMtMjg2Ny00ZTFiLTkzZTctMzg1OGFmYWYzYzVj',
        'Content-Type': 'application/json'
     },
        body: JSON.stringify({    
        included_segments:["Subscribed Users"],
        app_id: '98bfbb11-bc35-400b-940e-8d6b51dd2866',
        contents: {en:textTitlePush},
        headings:{en:textNotificationContent},
    })
    };
    fetch('https://onesignal.com/api/v1/notifications', requestPushOption)
    .then(response => response.json())
    .then(data => console.log(data));
    //api gửi 
}
    return (
        <View style={styles.container}>
           <TextInput
           style={Inputstyle.input}
           placeholder="Title Push"
           placeholderTextColor="#7B7D7D"
           autoCapitalize="none"
           onChangeText={
            (value) => settextTitlePush(value) }/>
            <TextInput
           style={Inputstyle.input}
           placeholder="Notification content"
           placeholderTextColor="#7B7D7D"
           autoCapitalize="none"
           onChangeText={
            (value) => setNotificationContent(value) }/>
             <TouchableOpacity
                    onPress={() => handlePush() }
                    style={ButtonStyle.btn}
                >
                    <View>
                        <Text style={ButtonStyle.textBTN}>Gửi Thông Báo</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default Sendpush

const styles = StyleSheet.create({
    container :{
    backgroundColor:"white",
    flex :1 ,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#e3e3e3",
}
})
