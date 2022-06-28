import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Checkbox } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { fetchAsyncRegister } from '../store/slice/auth'
import { AuthContext } from '../navigation/AuthProvider'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'

function SignupScreen(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation

    // @ts-ignore
    const { user, register } = useContext(AuthContext)

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [status, setStatus] = useState('unchecked')
    const dispatch = useDispatch()

    const SignUp = () => {
        register(data.username, data.password, data.email)
        // @ts-ignore
        dispatch(fetchAsyncRegister(data))
        log
    }

    return (
        <KeyboardAvoidingScrollView>
            <View style={{
                backgroundColor: 'lightgreen',
                flex:100,
            }}>
                <ImageBackground
                    source={require('../assets/background.jpg')}
                    resizeMode='cover'
                    style={{ flex: 1 }}
                >
                    <View style={{ height:350, flexDirection: 'column', }}>
                        <View>

                        </View>

                        <Text style={styles.header}>
                            Create your account
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
                        height:264,
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
                        <View style={styles.textinput}>
                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                placeholderTextColor={'black'}
                                value={data.email}
                                onChangeText={(val) => setData({ ...data, email: val })}
                            />
                        </View>
                        <View style={styles.warningtext}>
                            <Text style={{ marginTop: 10, color: 'white' }}>
                                I have read the
                            </Text >
                            <Text style={styles.highlitghttext}>
                                Private Policy
                            </Text>
                            <Checkbox.Android status={status} onPress={() => setStatus('checked')} />
                        </View>

                    </View>
                    <View style={{
                        flex: 20,
                    }}>
                        <Button
                            style={styles.button2}
                            mode='contained'
                            color='white'
                            onPress={SignUp}
                        >
                            GET STARTED
                        </Button>
                        <View style={styles.block3}>
                            <Text style={{ color: 'white' }}>
                                ALREADY HAVE AN ACCOUNT?
                            </Text>
                            <Text
                                style={styles.text3}
                                onPress={() => {
                                    navigate('SigninScreen')
                                }}>
                                LOG IN
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </KeyboardAvoidingScrollView>
    )
}

export default SignupScreen

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
    highlitghttext: {
        color: 'blue',
        marginLeft: 3,
        marginTop: 10
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
    block3: {
        flexDirection: 'row',
        marginTop: 60,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'black',
        marginTop: 15,
        fontWeight: '400',
        marginLeft: 100,
    },
    input: {
        height: 45,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 100,
        backgroundColor: 'white'
    },
    textinput: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    warningtext: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: 40,

    },
    icon: {
        width: 25,
        height: 25,
        position: 'absolute',
        left: 20,
        top: 12,
    },
})

function data(data: any): import("redux").AnyAction {
    throw new Error('Function not implemented.')
}
