import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

function WelcomeScreen(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation

    return (
        <View style={{
            flex: 100,
        }}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                resizeMode='cover'
                style={{ flex: 1 }}
            >
                <View style={{ flex: 80 }}>
                    <Image
                        style={styles.image}
                        source={require('../assets/quiz.jpg')} />
                </View>
                <View style={{
                    flex: 15,
                }}>
                    <Text style={styles.text1}>
                        QuizzMe
                    </Text>
                    <Text style={styles.text2}>
                        Test your knowledge!
                    </Text>
                </View>
                <View style={{
                    flex: 20,
                }}>
                    <Button
                        style={styles.button}
                        mode='contained'
                        color='white'
                        onPress={() => {
                            navigate('SignupScreen')
                        }}
                    >
                        Sign Up
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

export default WelcomeScreen

const styles = StyleSheet.create({
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
        marginTop: 10,
        alignSelf: 'center',
    },
    image: {
        height: 300,
        width: 300,
        alignSelf: 'center',
        marginTop: 120,
    }
})