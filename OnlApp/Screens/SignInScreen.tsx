import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { fetchAsyncLogin } from '../store/slices/auth';


function SignInScreen(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const testLogin = () => {
        // @ts-ignore
        dispatch(fetchAsyncLogin(data))
            .then(res => {
                if( !res.error ) {
                    navigate('UITab')
                }
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
                    SIGN IN
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
                            label='Email'
                            mode='outlined'
                            activeOutlineColor='black'
                            placeholder="Enter email"
                            placeholderTextColor={'black'}
                            value={data.email}
                            onChangeText={(val) => setData({ ...data, email: val })}
                        />
                    </View>
                    <View>
                        <TextInput
                            label='Password'
                            mode='outlined'
                            activeOutlineColor='black'
                            placeholder="Enter password"
                            placeholderTextColor={'black'}
                            secureTextEntry
                            value={data.password}
                            onChangeText={(val) => setData({ ...data, password: val })}
                        />
                    </View>
                    <Button
                        style={styles.button}
                        mode='contained'
                        color='black'
                        /**onPress={() => {
                            navigate('ListProduct')
                        }}*/
                        onPress={testLogin}>
                        <Text
                            style={styles.buttontext}>
                            Sign in
                        </Text>
                    </Button>
                    <Button
                        color='white'
                        onPress={() => {
                            navigate('SignUpScreen')
                        }}
                        style={styles.text}>
                        <Text style={{
                            color: 'black',
                        }}>
                            New Customer? Register
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: 10,
        color: 'black'
    },
    body: {
        height: 50,
        marginHorizontal: 10,
    },
    button: {
        marginTop: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        color: 'white',
        padding: 10,
    },
    textinput: {
        backgroundColor: 'lightgray'
    },
    head: {
        color: 'black',
        fontSize: 35,
        marginLeft: 10,
    }
})
export default SignInScreen;
