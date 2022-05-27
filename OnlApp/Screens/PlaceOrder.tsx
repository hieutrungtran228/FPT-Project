import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Button, TextInput, RadioButton } from 'react-native-paper';
function PlaceOder(props) {

    const { navigation, routes } = props
    const { navigate, goBack } = navigation

    const route = useRoute()
    return (
        <View
            style={{
                backgroundColor: '#F0F8FF',
                flex: 100,
            }}>
            <View
                style={{
                    marginTop: 70,
                    flex: 20,
                }}>
                <Text
                    style={styles.head}>
                    {' '}
                    ORDER
                </Text>
            </View>

            <View style={{flex:20, marginLeft:20}} >
                <Text style={styles.text}>SHIPPING</Text>
                <Text style={styles.textinfor}>{route.params.address}, {route.params.city} {route.params.postal}, {route.params.country} </Text>
            </View>

            <View style={{ flex: 20, marginLeft: 20 }}>
                <Text style={styles.text}>PAYMENT METHOD</Text>
                <Text>Method: PayPal</Text>
            </View>

            <View style={{ flex: 90, marginLeft: 20 }}>
                <Text style={styles.text}>ORDER ITEMS</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        color: 'black',
        fontSize: 35,
        marginLeft: 10,
    },
    text: {
        fontSize: 20,
        marginTop: 10,
        color: 'black'
    },
    textinfor: {
        fontSize: 16,
        marginTop: 10,
        color: 'grey'
    },
    button: {
        backgroundColor: 'black',
        marginTop: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        color: 'white',
        padding: 10,
        fontSize: 12,
    },

})
export default PlaceOder;
