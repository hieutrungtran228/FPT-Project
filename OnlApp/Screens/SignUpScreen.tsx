import React from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

function SignUpScreen(props) {
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
                    SIGN UP
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
                        Name
                    </Text>
                    <TextInput
                        placeholder="Enter name"
                        placeholderTextColor={'white'}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 10,
                            color: 'black'
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
                            color: 'black'
                        }}>
                        Password
                    </Text>
                    <TextInput
                        placeholder="Enter password"
                        placeholderTextColor={'white'}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 10,
                            color: 'black'
                        }}>
                        Confirm Password
                    </Text>
                    <TextInput
                        placeholder="Confirm password"
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
                            Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#F0F8FF',
                            marginTop: 10,
                            width: 160,
                        }}>
                        <Text style={{
                            color: 'black',
                        }}>
                            Have an Account? Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default SignUpScreen;
