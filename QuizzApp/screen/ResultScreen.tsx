import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useEffect, useState } from 'react'
import { Button } from "react-native-paper";

function ResultScreen(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const totalScore = route.params.totalScore

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>This is your result</Text>

                <View style={styles.box1}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.icon1}>
                        <Image
                                style={styles.icon2}
                                source={require('../assets/document.jpg')} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.text}>
                                {totalScore}/10 Questions
                            </Text>
                            <Text>
                                10 point for a correct answer
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={styles.box1}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.icon1}>
                            <Image
                                style={styles.icon2}
                                source={require('../assets/star.jpg')} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.text}>
                                {totalScore} stars achieved
                            </Text>
                            <Text>
                                Answer all questions correctly
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.box1}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.icon1}>
                        <Image
                                style={styles.icon2}
                                source={require('../assets/clock.jpg')} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text  style={styles.text}>
                                46 min
                            </Text>
                            <Text>
                                Total duration of the Quiz
                            </Text>
                        </View>
                    </View>
                </View>


                <Button
                    style={styles.button}
                    onPress={props.buttonPress}>
                    <Text style={styles.buttonText}>Go Back</Text>
                </Button>
            </View>
        </View>
    );
};

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flex:100,
        backgroundColor: "white",
        borderRadius: 40,
    },
    title: {
        textAlign: "left",
        marginTop: 40,
        marginLeft: 30,
        fontSize: 16,
        fontWeight: "bold",
        color:'black'
    },
    box1: { 
        marginLeft: 36, 
        marginTop: 20 
    },
    icon1: {
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
        tintColor:'white'
    },
    text: {
        fontSize: 16, 
        fontWeight: "bold",
        color:'black',
    },
    button: {
        width: 150,
        height: 50,
        marginTop: 40,
        borderRadius: 20,
        backgroundColor: "#0080FF",
        alignSelf: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white"
    }
});