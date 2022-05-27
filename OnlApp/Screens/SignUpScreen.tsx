import React, { useContext, useState } from 'react';
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
import { fetchAsyncRegister } from '../store/slices/auth';
import { AuthContext } from '../navigation/AuthProvider';

function SignUpScreen(props) {

    const{navigation, route} = props
    const{navigate, goBack} = navigation
    
    const [data, setData] = useState({
        name:'',
        email: '',
        password: '',
        confirmPassword:'',
    })

    const dispatch = useDispatch()
    // @ts-ignore
    const { user, register } = useContext(AuthContext)
    
    const testRegister = () => {
        // @ts-ignore
        dispatch(fetchAsyncRegister(data))
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
                            secureTextEntry={true}
                            value={data.password}
                            onChangeText={(val) => setData({ ...data, password: val })}
                        />
                    </View>
                    <View>
                    <TextInput
                            label='Confirm password'
                            mode='outlined'
                            activeOutlineColor='black'
                            placeholder="Enter password"
                            placeholderTextColor={'black'}
                            secureTextEntry={true}
                            value={data.confirmPassword}
                            onChangeText={(val) => setData({ ...data, confirmPassword: val })}
                        />
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
        marginTop: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext:{
        color: 'white',
        padding: 10,
        fontSize:13,
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
