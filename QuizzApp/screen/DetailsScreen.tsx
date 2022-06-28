import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React, { useEffect, useState } from 'react'
import { Button } from "react-native-paper";

function DetailsScreen(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const [token, setToken] = useState(route.params.token)

    return (
        <View style={{
            flex: 100,
        }}>
            <ImageBackground
                source={require('../assets/background.jpg')}
                resizeMode='cover'
                style={{ flex: 1 }}
            >
                <View style={{ flex: 20, marginLeft: 20, }}>
                    <View >
                        <Text style={styles.title1}>Computer Science Quiz</Text>
                        <Text style={styles.title2}>GET 100 Points</Text>
                    </View>
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
                        <View style={{ flex: 90, }}>
                            <Text style={styles.title3}>
                                Brief Explanation about this quiz
                            </Text>

                            <View style={styles.box1}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={styles.icon}>
                                        <Image
                                            style={styles.icon2}
                                            source={require('../assets/document.jpg')} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.titleinfor}>
                                            8 Questions
                                        </Text>
                                        <Text style={{ fontSize: 14, }}>
                                            12.5 points for a correct answer
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.box1}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={styles.icon}>
                                        <Image
                                            style={styles.icon2}
                                            source={require('../assets/clock.jpg')} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.titleinfor}>
                                            15 min

                                        </Text>
                                        <Text style={{ fontSize: 14, }}>
                                            Total duration of the quiz
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.box1}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <View style={styles.icon}>
                                        <Image
                                            style={styles.icon2}
                                            source={require('../assets/star.jpg')} />
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.titleinfor}>
                                            Win 10 star
                                        </Text>
                                        <Text style={{ fontSize: 14, }}>
                                            Answer all questions correctly
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={styles.title3}>
                                Please read the text below carefully so you can understand it
                            </Text>

                            <View
                                style={styles.box2}
                            >
                                <View style={styles.dot}></View>
                                <Text>
                                    10 point awarded for a correct answer and no {"\n"}marks for a incorrect answer.
                                </Text>
                            </View>

                            <View
                                style={styles.box2}
                            >
                                <View style={styles.dot}></View>
                                <Text>
                                    Tap on options to select the correct answer.
                                </Text>
                            </View>

                            <View
                                style={styles.box2}
                            >
                                <View style={styles.dot}></View>
                                <Text>
                                    Tap on the bookmark icon to save interesting {"\n"} questions.
                                </Text>
                            </View>

                            <View
                                style={styles.box2}
                            >
                                <View style={styles.dot}></View>
                                <Text>
                                    Click submit if you are sure you want to {"\n"}complete all the quizzes.
                                </Text>
                            </View>

                            <Button style={styles.button}
                                onPress={() => {
                                    navigate('QuizScreen', {
                                        token: token
                                    })
                                }}>
                                <Text style={styles.buttonText}>Start Quizz</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>


    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: "white",
        borderRadius: 40,
    },
    title1: {
        marginTop: 50,
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
    },
    title2: {
        color: "white",
        fontSize: 14,
        justifyContent: "flex-start",
        marginBottom: 10,
    },
    title3: {
        textAlign: "left",
        marginTop: 20,
        marginLeft: 30,
        fontSize: 16,
        fontWeight: "bold",
        color: 'black',
    },
    titleinfor: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black'
    },
    box1: {
        marginLeft: 36,
        marginTop: 15
    },
    box2: {
        flexDirection: "row",
        marginLeft: 36,
        marginTop: 20,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    icon: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    icon2: {
        height: 15,
        width: 15,
        tintColor: 'white'
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "black",
        marginRight:15,
    },
    button: {
        width: 150,
        height: 50,
        marginTop: 40,
        borderRadius: 20,
        backgroundColor: "#0388fc",
        alignSelf: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    },
});

