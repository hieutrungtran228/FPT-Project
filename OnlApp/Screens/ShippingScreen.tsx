import React from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

function ShippingScreen(props) {
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
                    SHIPPING
                </Text>
            </View>

            <View
                style={{
                    flex: 80,
                }}>
                <View
                    style={styles.body}>
                    <Text
                        style={styles.text}>
                        Address
                    </Text>
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder="Enter address"
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <Text
                        style={styles.text}>
                        City
                    </Text>
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder="Enter city"
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <Text
                        style={styles.text}>
                        Postal Code
                    </Text>
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder="Enter postal code"
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <Text
                        style={styles.text}>
                        Country
                    </Text>
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder="Enter country"
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}>
                        <Text
                            style={{
                                color: 'white',
                                padding: 10,
                            }}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    head:{
        color: 'black',
        fontSize: 35,
        marginLeft: 10,
    },
    text:{
        fontSize: 20,
        marginTop: 10,
        color: 'black'
    },
    textinput:{
        backgroundColor:'lightgray'
    },
    button:{
        backgroundColor: 'black',
        marginTop: 10,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body:{
        height: 50,
        marginHorizontal: 10,
    },
})
export default ShippingScreen;
