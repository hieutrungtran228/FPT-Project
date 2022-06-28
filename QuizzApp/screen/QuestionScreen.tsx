import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchQuestion } from '../store/slice/question'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TextInput } from 'react-native-paper'
import QuizButton from './QuizzButton'


function QuestionScreen(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const [question, setQuestion] = useState({})
    const [searchText, setSearchText] = useState('')
    const [token, setToken] = useState(route.params.accessToken)
    const getQuestionUser = () => {
        axios
            .get(
                "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions?page=1&limit=4",
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((response) => {
                setQuestion(response.data.results);
                console.log('cau hoi day', response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });

        console.log('token day', route.params.accessToken);

    };
    if (!question) {
        getQuestionUser();
    }

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
                        backgroundColor: 'white',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,

                    }}>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                            <Text style={styles.text1}>
                                Popular
                            </Text>
                            <Text style={styles.text1}>
                                Science
                            </Text>
                            <Text style={styles.text1}>
                                Mathematic
                            </Text>
                            <Text style={[styles.text1, { color: '#0080FF', fontWeight: 'bold' }]}>
                                Computer
                            </Text>
                        </View>
                        <QuizButton
                            quizName="UI UX Design"
                            img_url=""
                            buttonPressed={() => {
                                navigation.navigate('DetailsScreen', {
                                    accessToken: token
                                }), { getQuestionUser }
                            }}
                        />
                        <QuizButton
                            quizName="Graphic Design"
                            img_url=""
                            buttonPressed={() => {
                                navigation.navigate('DetailsScreen', {
                                    accessToken: token
                                }), { getQuestionUser }
                            }}
                        />
                        <View>

                        </View>
                        <View style={{
                            flex: 40,
                        }}>
                            <Text style={styles.text2}>
                                Continue Quiz
                            </Text>
                            <View style={{
                                height: 180,
                            }}>
                            </View>
                        </View>
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
    text1: {
        fontSize: 14,
        marginLeft: 30,
        marginTop: 5,
    },
    text2: {
        color: 'black',
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
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
    chose: {
        borderRadius: 100,
        marginHorizontal: 10,
        height: 42,
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