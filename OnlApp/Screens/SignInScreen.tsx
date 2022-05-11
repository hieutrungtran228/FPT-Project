import React from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

function SignInScreen(props) {
    const{navigation, route} = props
    const{navigate, goBack} = navigation
    
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
                    <Text
                        style={styles.text}>
                        Email adress
                    </Text>
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder="Enter email"
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <Text
                        style={styles.text}>
                        Password
                    </Text>
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder="Enter password"
                            placeholderTextColor={'white'}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity
                    onPress={() => {
                        navigate('ListProduct')
                    }}
                        style={styles.button}>
                        <Text
                            style={styles.buttontext}>
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('SignUpScreen')
                        }}
                        style={styles.swap}>
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
        marginTop: 10,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        color: 'white',
        padding: 10,
    },
    swap: {
        backgroundColor: '#F0F8FF',
        marginTop: 10,
        width: 160,
    },
    textinput:{
        backgroundColor:'lightgray'
    },
    head:{
        color: 'black',
        fontSize: 35,
        marginLeft: 10,
    }
})
export default SignInScreen;
