import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchQuestion } from '../store/slice/question'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextInput } from 'react-native-paper'


function QuestionScreen(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation

    const [searchText, setSearchText] = useState('')

    return (
        <View style={{
            flex: 100,
        }}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                resizeMode='cover'
                style={{ flex: 1 }}
            >
                <View style={{ flex: 30, flexDirection: 'column', }}>
                    <View>

                    </View>

                    <Text style={styles.hello}>
                        Hello, Hieu(api name)
                    </Text>
                    <Text style={styles.header}>
                        Let's test your knowledge
                    </Text>
                    <Image
                        style={styles.icon}
                        source={require('../assets/search.jpg')} />
                    <TextInput style={styles.textinput}
                        autoCorrect={false}
                        onChangeText={(text) => {
                            setSearchText(text)
                        }}
                    />

                </View>
                <View style={{
                    flex: 90,
                }}>
                    <View style={{
                        flex: 50,
                        backgroundColor: 'lightblue',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                    }}>
                        <Text style={styles.text}>
                            Name header
                        </Text>
                    </View>
                    <View style={{
                        flex: 50,
                        backgroundColor: 'lightgreen'
                    }}>
                        <Text style={styles.text1}>
                            Continue Quiz
                        </Text>
                        <View style={{
                            height: 180,
                            backgroundColor: 'lightyellow'
                        }}>

                        </View>
                        <Button
                            style={styles.button}
                            mode='contained'
                            color='white'
                            onPress={() => { }}
                        >
                            LOG IN
                        </Button>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default QuestionScreen

const styles = StyleSheet.create({
    hello: {
        color: 'white',
        fontSize: 15,
        marginTop: 50,
        marginLeft: 28,
    },
    header: {
        color: 'white',
        marginLeft: 28,
        fontSize: 25,
        marginBottom: 20,
    },
    icon: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 10,
        tintColor: 'black'
    },
    textinput: {
        marginHorizontal: 10,
        borderRadius: 8,
        height: 40,
    },
    text: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'

    },
    text1: {
        color: 'black',
        fontSize: 20,
        marginLeft: 20,
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

})



/*const dispatch = useDispatch()
const dataQuestion = useSelector(state => state.Question.items)

useEffect(() => {
    dispatch(fetchQuestion())
}, [])

console.log('dataQuestion',  dataQuestion);

return (
    <View>
        <Text>Question</Text>
    </View>
)**/