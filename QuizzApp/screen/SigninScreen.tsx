import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { fetchAsyncLogin } from '../store/slice/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'

function SigninScreen(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const [accessToken, setAccessToken] = useState("");

    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const SignIn = async () => {
        axios
            .post('https://fwa-ec-quiz-mock1.herokuapp.com/v1/auth/login', {
                username: data.username,
                password: data.password,
            })
            .then((response) => {
                AsyncStorage.setItem("accessToken", response.data.tokens.access.token)
                navigation.navigate('QuestionScreen', {
                    accessToken: accessToken,
                })
            })
            .catch((error) => {
                alert(error.data);
            });
    }

    const storeAccessToken = async () => {
        try {
            setAccessToken(await AsyncStorage.getItem("accessToken"));
        } catch (error) {
            console.log(error);
        }
    };
    storeAccessToken();


    return (
        <KeyboardAvoidingScrollView>
            <View style={{
                flex: 100,
            }}>
                <ImageBackground
                    source={require('../assets/background.jpg')}
                    resizeMode='cover'
                    style={{ flex: 100 }}
                >
                    <View style={{ height:350, flexDirection: 'column', }}>
                        <View>

                        </View>

                        <Text style={styles.header}>
                            Welcome Back!
                        </Text>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { }}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../assets/facebook.jpg')} />
                            <Text style={styles.buttonText}>CONTINUE WITH FACEBOOK</Text>
                        </TouchableOpacity>

                        <View style={{ marginVertical: 25 }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => { }}
                            >
                                <Image
                                    style={styles.icon}
                                    source={require('../assets/google.jpg')} />
                                <Text style={styles.buttonText}>CONTINUE WITH GOOGLE</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.text}>
                            OR LOG IN WITH EMAIL
                        </Text>

                    </View>
                    <View style={{
                        height:266,
                    }}>
                        <View style={styles.textinput}>
                            <TextInput
                                style={styles.input}
                                placeholder='Username'
                                placeholderTextColor={'black'}
                                value={data.username}
                                onChangeText={(val) => setData({ ...data, username: val })}
                            />
                        </View>
                        <View style={styles.textinput}>
                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                placeholderTextColor={'black'}
                                value={data.password}
                                onChangeText={(val) => setData({ ...data, password: val })}
                            />
                        </View>
                        <View style={{ marginVertical: 20 }}>
                            <Button
                                style={styles.button2}
                                mode='contained'
                                color='white'
                                onPress={SignIn}
                            >
                                LOG IN
                            </Button>
                        </View>
                        <Text style={styles.text}
                            onPress={() => {

                            }}>
                            Forgot Password?
                        </Text>
                    </View>
                    <View style={{
                        flex: 20,
                    }}>
                        <View style={styles.block3}>
                            <Text style={{ color: 'white' }}>
                                DON'T HAVE AN ACCOUNT?
                            </Text>
                            <Text
                                style={styles.text3}
                                onPress={() => {
                                    navigation.navigate('SignupScreen')
                                }}>
                                SIGN UP
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </KeyboardAvoidingScrollView>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    header: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 50,
        marginBottom: 20,
    },
    text: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
    },
    text1: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    text2: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    text3: {
        color: 'blue',
        marginLeft: 3,
    },
    button: {
        borderRadius: 100,
        marginHorizontal: 10,
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    button2: {
        borderRadius: 100,
        marginHorizontal: 10,
        height: 42,
    },
    buttonText: {
        color: 'black',
        marginTop: 15,
        fontWeight: '400',
        marginLeft: 100,
    },
    block3: {
        flexDirection: 'row',
        marginTop: 100,
        alignSelf: 'center',
    },
    textinput: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    input: {
        height: 45,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    icon: {
        width: 25,
        height: 25,
        position: 'absolute',
        left: 20,
        top: 12,
    },
})