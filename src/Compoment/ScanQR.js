import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
export default class ScanQR extends Component {
    
    
    ifScanned=QR=>{
        Alert.alert(QR.data)
    }
    render() {
        return (
            <QRCodeScanner
            containerStyle={{backgroundColor:'black'}}
            onRead={this.ifScanned}
            showMarker={true}
            permissionDialogMessage="Cần cho phép sử dụng camera"
            reactivateTimeout={10}
            markerStyle={{borderColor:"#FFF",borderRadius:10}}
            reactivate={true}
            />
        )}
}

const styles = StyleSheet.create({})
