import React from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

function PaymentScreen(props) {
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
                    PAYMENT METHOD
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
                            fontSize: 25,
                            marginTop: 10,
                        }}>
                        Select method
                    </Text>
                    <Text>
                        đoạn này thiếu
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'black',
                            marginTop: 10,
                            width: 80,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:10,
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

export default PaymentScreen;
