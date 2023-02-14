import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Button, TextInput, RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { fetchAsyncLogin } from '../store/slices/auth';
import Toast from 'react-native-toast-message';


function SignInScreen(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const dispatch = useDispatch()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const[status,setStatus]=useState('1')
    const showToast = () => {
        Toast.show({
            type: 'info',
            text1: 'Register successful ',
        });
    }
    const showToast2 = () => {
        Toast.show({
            type: 'error',
            text1: 'Login fail ',
        });
    }
    
    useEffect(() => {
        showToast()
    }, [status])
    const [checked1, setChecked1] = useState(false);
    const pressradio = () => {
        setChecked1(!checked1)
    }
    const testLogin = () => {
        // @ts-ignore
        // dispatch(fetchAsyncLogin(data))
        //     .then(res => {
        //         if( !res.error ) {
        //             navigate('UITab')
        //         }
        //     })
        
            if (data.email == 'wrong') {
                showToast2()
            } else {
                navigate('UITab')
            }
    }
    const [passwordVisible, setPasswordVisible] = useState(true);
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
                    alignSelf:'center'
                }}>
                <Text
                    style={styles.head}>
                    SIGN IN
                </Text>
            </View>
                <Toast />
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
                            secureTextEntry={passwordVisible}
                            right={<TextInput.Icon icon={passwordVisible ? require('../assets/eye.png') : require('../assets/eye-off.png')}
                                onPress={() => setPasswordVisible(!passwordVisible)} />}
                            value={data.password}
                            onChangeText={(val) => setData({ ...data, password: val })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <RadioButton
                            value="first"
                            color='grey'
                            status={checked1 === true ? 'checked' : 'unchecked'}
                            onPress={pressradio}
                        />
                        <Text style={{fontSize:15, marginTop:7, color:'black'}}>
                            Stay login
                        </Text>
                        <Text
                            style={{ fontSize: 15, marginTop: 7, marginLeft: 138, color: 'black' }}
                            //onPress={setStatus('2')}
                        >
                            Forgot password?
                        </Text>
                    </View>

                    <Button
                        style={styles.button}
                        mode='contained'
                        color='black'
                        /**onPress={() => {
                        navigate('ListProduct')
                    }}*/
                        onPress={testLogin}>
                        <Text style={styles.buttontext}>
                            Sign in
                        </Text>
                    </Button>
                    <Button
                        color='white'
                        onPress={() => {
                            navigation.replace('SignUpScreen')
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
        backgroundColor: 'black',
        marginTop: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        height:35,
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
