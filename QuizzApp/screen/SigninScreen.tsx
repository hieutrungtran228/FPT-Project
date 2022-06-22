import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { fetchAsyncLogin } from '../store/slice/auth'

function SigninScreen(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation

    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const SignIn = () => {
        console.log('data', data);
        //@ts-ignore
        dispatch(fetchAsyncLogin(data))
            .then(res => {
                if (!res.error) {
                    navigate('QuestionScreen')
                }
            })
    }

    return (
        <View style={{
            flex: 100,
        }}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                resizeMode='cover'
                style={{ flex: 1 }}
            >
                <View style={{ flex: 40, flexDirection: 'column', }}>
                    <View>

                    </View>

                    <Text style={styles.header}>
                        Welcome Back!
                    </Text>
                    <Button
                        style={styles.button}
                        mode='contained'
                        color='white'
                        onPress={() => { }}
                    >
                        CONTINUE WITH FACEBOOK
                    </Button>
                    <View style={{ marginVertical: 25 }}>
                        <Button
                            style={styles.button}
                            mode='contained'
                            color='white'
                            onPress={() => { }}
                        >
                            CONTINUE WITH GOOGLE
                        </Button>
                    </View>
                    <Text style={styles.text}>
                        OR LOG IN WITH EMAIL
                    </Text>

                </View>
                <View style={{
                    flex: 40,
                }}>
                    <View style={styles.textinput}>
                        <TextInput
                            mode='outlined'
                            activeOutlineColor='black'
                            placeholder='Username'
                            placeholderTextColor={'black'}
                            value={data.username}
                            onChangeText={(val) => setData({ ...data, username: val })}
                        />
                    </View>
                    <View style={styles.textinput}>
                        <TextInput
                            mode='outlined'
                            activeOutlineColor='black'
                            placeholder='Password'
                            placeholderTextColor={'black'}
                            value={data.password}
                            onChangeText={(val) => setData({ ...data, password: val })}
                        />
                    </View>
                    <View style={{ marginVertical: 20 }}>
                        <Button
                            style={styles.button}
                            mode='contained'
                            color='white'
                            onPress={SignIn}
                        >
                            LOG IN
                        </Button>
                    </View>
                    <Text style={styles.text}
                        onPress={() => {
                            navigation.navigate('QuestionScreen')
                        }}>
                        Forgot Password?
                    </Text>
                </View>
                <View style={{
                    flex: 20,
                }}>
                    <View style={styles.block3}>
                        <Text>
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
        fontWeight: 'bold',
        marginLeft: 3,
    },
    button: {
        borderRadius: 100,
        marginHorizontal: 10,
        height: 42,
    },
    block3: {
        flexDirection: 'row',
        marginTop: 100,
        alignSelf: 'center',

    },
    textinput: {
        marginHorizontal: 10,
        marginVertical: 10
    }
})