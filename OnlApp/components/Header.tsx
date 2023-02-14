import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native'

const Header = ({ title }: any) => {
    const navigation = useNavigation<any>();

    const openDrawer = () => {
      
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={openDrawer}>
                <View style={styles.head}>
                    <Text style={{fontSize:20, color:'black'}}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
        marginBottom: 6,
        marginTop: 12,
    },
    star: {
        width: 15,
        height: 15,
        marginTop: 7,
    },
    head:{
        marginLeft:175,
        fontSize: 100,
        color: 'blue',
        fontWeight:'bold'
    }
})