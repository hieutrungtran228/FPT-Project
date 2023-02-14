import React, { useContext, useState } from 'react';
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
import { fetchAsyncRegister } from '../store/slices/auth';
import { AuthContext } from '../navigation/AuthProvider';

function SignUpScreen(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [checked1, setChecked1] = useState(false);
    const pressradio = () => {
        setChecked1(!checked1)
    }

    const dispatch = useDispatch()
    // @ts-ignore
    const { user, register } = useContext(AuthContext)

    const testRegister = () => {
        // @ts-ignore
        //dispatch(fetchAsyncRegister(data))
        navigate('SignInScreen')
    }
    const [passwordVisible1, setPasswordVisible1] = useState(true);
    const [passwordVisible2, setPasswordVisible2] = useState(true);


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
                    alignSelf: 'center'
                }}>
                <Text
                    style={styles.head}>
                    SIGN UP
                </Text>
            </View>

            <View
                style={{
                    flex: 80,
                }}>
                <View
                    style={styles.body}>
                    <View >
                        <TextInput
                            label='Name'
                            mode='outlined'
                            activeOutlineColor='black'
                            placeholder="Enter name"
                            placeholderTextColor={'black'}
                            value={data.name}
                            onChangeText={(val) => setData({ ...data, name: val })}
                        />
                    </View>
                    <View >
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
                    <View >
                        <TextInput
                            label='Password'
                            mode='outlined'
                            activeOutlineColor='black'
                            placeholder="Enter password"
                            placeholderTextColor={'black'}
                            secureTextEntry={passwordVisible1}
                            right={<TextInput.Icon icon={passwordVisible1 ? require('../assets/eye.png') : require('../assets/eye-off.png')}
                                onPress={() => setPasswordVisible1(!passwordVisible1)} />}
                            value={data.password}
                            onChangeText={(val) => setData({ ...data, password: val })}
                        />
                    </View>
                    <View style={{marginBottom:10,}}>
                        <TextInput
                            label='Confirm password'
                            mode='outlined'
                            activeOutlineColor='black'
                            placeholder="Enter password"
                            placeholderTextColor={'black'}
                            secureTextEntry={passwordVisible2}
                            right={<TextInput.Icon icon={passwordVisible2 ? require('../assets/eye.png') : require('../assets/eye-off.png')}
                                onPress={() => setPasswordVisible2(!passwordVisible2)} />}
                            value={data.confirmPassword}
                            onChangeText={(val) => setData({ ...data, confirmPassword: val })}
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <RadioButton
                            value="first"
                            color='grey'
                            status={checked1 === true ? 'checked' : 'unchecked'}
                            onPress={pressradio}
                        />
                        <View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{ fontSize: 15, color: 'black' }}>
                                    I agree with the
                                </Text>
                                <Text style={{ fontSize: 15,  color: 'blue', marginLeft:3 }}>
                                    Terms and Condition
                                </Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{ fontSize: 15, color: 'black' }}>
                                    and the 
                                </Text>
                                <Text style={{ fontSize: 15, color: 'blue', marginLeft:3 }}>
                                    Privacy Policy
                                </Text>
                            </View>
                        </View>

                    </View>
                    <Button
                        style={styles.button}
                        mode='contained'
                        color='black'
                        /**onPress={() => {
                            navigate('ShippingScreen')
                        }}*/
                        onPress={testRegister}>
                        <Text
                            style={styles.buttontext}>
                            Register
                        </Text>
                    </Button>
                    <Button
                        color='white'
                        onPress={() => {
                            navigate('SignInScreen')
                        }}
                    >
                        <Text style={{
                            color: 'black',
                        }}>
                            Have an Account? Login
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
    textinput: {
        backgroundColor: 'lightgray'
    },
    button: {
        backgroundColor: 'black',
        marginTop: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 35,
        marginBottom: 10,
    },
    buttontext: {
        color: 'white',
        padding: 10,
        fontSize: 13,
    },
    swapbutton: {
        backgroundColor: '#F0F8FF',
        marginTop: 10,
        width: 160,
    },
    body: {
        height: 50,
        marginHorizontal: 10,

    },
    head: {
        color: 'black',
        fontSize: 35,
        marginLeft: 10,
    }
})
export default SignUpScreen;
