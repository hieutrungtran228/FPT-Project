import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, TextInput, Checkbox } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { fetchAsyncRegister } from '../store/slice/auth'
import { AuthContext } from '../navigation/AuthProvider'

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
        console.log('data', data);
        register(data.username, data.password, data.email)
        // @ts-ignore
        dispatch(fetchAsyncRegister(data))
    }

    return (
        <View style={{
            backgroundColor: 'lightgreen',
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
                        Create your account
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
                    <View style={styles.textinput}>
                        <TextInput
                            mode='outlined'
                            activeOutlineColor='black'
                            placeholder='Email'
                            placeholderTextColor={'black'}
                            value={data.email}
                            onChangeText={(val) => setData({ ...data, email: val })}
                        />
                    </View>
                    <View style={styles.warningtext}>
                        <Text style={{ marginTop: 10 }}>
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
                        style={styles.button}
                        mode='contained'
                        color='white'
                        onPress={SignUp}
                    >
                        GET STARTED
                    </Button>
                    <View style={styles.block3}>
                        <Text>
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
        fontWeight: 'bold',
        marginLeft: 3,
    },
    highlitghttext: {
        color: 'red',
        marginLeft: 3,
        marginTop: 10
    },
    button: {
        borderRadius: 100,
        marginHorizontal: 10,
        height: 42,
    },
    block3: {
        flexDirection: 'row',
        marginTop: 60,
        alignSelf: 'center',

    },
    textinput: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    warningtext: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: 40
    }
})

function data(data: any): import("redux").AnyAction {
    throw new Error('Function not implemented.')
}
