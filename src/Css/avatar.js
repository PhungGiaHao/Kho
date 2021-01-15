import { TouchableOpacity,Text, View ,Image,StyleSheet} from 'react-native'
export const avatarStyle = StyleSheet.create({
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth:3,
        borderColor:'white'
     },
     viewAvatar:{
            flexDirection:'column',
            justifyContent:'center',
            alignSelf:'center'
     },
     avatarFlatlist:{
            height: 50,
            width: 50,
            borderRadius: 40,
            margin:5
     }
 })