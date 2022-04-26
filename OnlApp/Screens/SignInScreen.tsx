import React from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

function SignInScreen(props) {
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
                    SIGN IN
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
                        }}>
                        Email adress
                    </Text>
                    <TextInput
                        placeholder="Enter email"
                        placeholderTextColor={'white'}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 10,
                        }}>
                        Password
                    </Text>
                    <TextInput
                        placeholder="Enter password"
                        placeholderTextColor={'white'}
                        secureTextEntry={true}
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
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            marginTop: 10,
                            width: 160,
                        }}>
                        <Text style={{
                            color: 'black',
                        }}>
                            New Customer? Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default SignInScreen;
