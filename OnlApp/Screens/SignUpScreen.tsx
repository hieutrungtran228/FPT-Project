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

function SignUpScreen(props) {

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
                    SIGN UP
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
                        Name
                    </Text>
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder="Enter name"
                            placeholderTextColor={'white'}
                        />
                    </View>
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
                        />
                    </View>

                    <Text
                        style={styles.text}>
                        Confirm Password
                    </Text>
                    <View style={styles.textinput}>
                        <TextInput
                            placeholder="Confirm password"
                            placeholderTextColor={'white'}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}>
                        <Text
                            style={styles.buttontext}>
                            Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('SignInScreen')
                        }}
                        style={styles.swapbutton}>
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
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext:{
        color: 'white',
        padding: 10,
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
