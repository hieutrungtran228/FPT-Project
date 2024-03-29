import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Button, TextInput, RadioButton } from 'react-native-paper';
function ShippingScreen(props) {


    const navigation= useNavigation()

    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postal, setPostal] = useState('')
    const [country, setCountry] = useState('')

    const order = () => {
        // @ts-ignore
        navigation.navigate("PlaceOrder",{
            address : address,
            city : city,
            postal: postal,
            country: country,
        })
    }
    return (
        <View
            style={{
                backgroundColor: '#F0F8FF',
                flex: 100,
            }}>
            <View
                style={{
                    marginTop: 70,
                    flex: 10,
                }}>
                <Text
                    style={styles.head}>
                    {' '}
                    SHIPPING ADDRESS
                </Text>
            </View>

            <View
                style={{
                    flex: 80,
                }}>
                <View
                    style={styles.body}>
                    <View>
                        <TextInput
                            label='Address'
                            mode='outlined'
                            value={address}
                            activeOutlineColor='black'
                            placeholder="Enter address"
                            placeholderTextColor={'black'}
                            onChangeText={(text) => setAddress(text)}
                        />
                    </View>
                    <View>
                        <TextInput
                            label='City'
                            mode='outlined'
                            value={city}
                            activeOutlineColor='black'
                            placeholder="Enter city"
                            placeholderTextColor={'black'}
                            onChangeText={(text) => setCity(text)}
                        />
                    </View>
                    <View>
                        <TextInput
                            label='Country'
                            mode='outlined'
                            value={country}
                            activeOutlineColor='black'
                            placeholder="Enter country"
                            placeholderTextColor={'black'}
                            onChangeText={(text) => setCountry(text)}
                        />
                    </View>
                    <View
                        style={{
                            flex: 80,
                        }}>
                        <View style={styles.body}>
                            <Button
                                style={styles.button}
                                mode='contained'
                                color='black'
                                onPress={order}
                            >
                                <Text
                                    style={styles.buttontext}>
                                    Continue
                                </Text>
                            </Button>
                        </View>
                    </View>
                </View>
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
    button: {
        backgroundColor: 'black',
        marginTop: 40,
        width: 200,
        height:35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    body: {
        height: 50,
        marginHorizontal: 10,
    },
    buttontext: {
        color: 'white',
        padding: 10,
        fontSize: 12,
    },
})
export default ShippingScreen;
