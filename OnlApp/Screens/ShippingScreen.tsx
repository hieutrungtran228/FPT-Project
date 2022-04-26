import React from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
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
                    style={{
                        color: 'black',
                        fontSize: 35,
                        marginLeft: 10,
                    }}>
                    {' '}
                    SHIPPING
                </Text>
            </View>

            <View
                style={{
                    flex: 80,
                }}>
                <View
                    style={{
                        height: 50,
                        marginHorizontal: 10,
                        flexDirection: 'column',
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 10,
                            color: 'black'
                        }}>
                        Address
                    </Text>
                    <TextInput
                        placeholder="Enter address"
                        placeholderTextColor={'white'}
                        
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 10,
                            color: 'black'
                        }}>
                        City
                    </Text>
                    <TextInput
                        placeholder="Enter city"
                        placeholderTextColor={'white'}
                        
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 10,
                            color: 'black'
                        }}>
                        Postal Code
                    </Text>
                    <TextInput
                        placeholder="Enter postal code"
                        placeholderTextColor={'white'}
                        
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 10,
                            color: 'black'
                        }}>
                        Country
                    </Text>
                    <TextInput
                        placeholder="Enter country"
                        placeholderTextColor={'white'}
                        
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'black',
                            marginTop: 10,
                            width: 80,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
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

export default ShippingScreen;
