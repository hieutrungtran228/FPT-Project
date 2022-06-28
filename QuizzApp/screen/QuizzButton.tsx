import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const QuizButton = (props) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={props.buttonPressed}
        >
            <View style={styles.container2}>
                <Image
                    style={styles.image}
                    source={{
                        
                    }}
                />
                <View
                    style={{
                        flexDirection: "column",
                        alignSelf: "center",
                        marginLeft: 30,
                    }}
                >
                    <Text style={styles.namequiz}>{props.quizName}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={styles.icon1}
                            source={require('../assets/document.jpg')}
                        />
                        <Text style={styles.text1}>10 Question</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={styles.icon1}
                            source={require('../assets/clock.jpg')}
                        />
                        <Text style={styles.text1}>1 hour 15 min</Text>
                    </View>
                </View>

                <View
                    style={{ flexDirection: "row", alignSelf: "center", marginLeft: 50 }}
                >
                    <Text
                        style={{
                            alignSelf: "center",
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "blue",
                        }}>
                        {" "}
                        4.8
                    </Text>
                    <Image
                            style={styles.icon2}
                            source={require('../assets/rate.jpg')}
                        />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default QuizButton;

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    container2: {
        width: 370,
        height: 120,
        backgroundColor: 'rgba(52,52,52, 0.05)',
        marginTop: 30,
        borderRadius: 10,
        flexDirection: "row"
    },
    image: {
        width: 75,
        height: 75,
        alignSelf: "center",
        marginLeft: 20,
        borderRadius: 20,
        backgroundColor: "#0080FF"
    },
    text1: {
        fontSize: 15,
        color: "#999999",
        fontWeight: "bold",
        marginBottom: 5,
    },
    namequiz: {
        fontSize: 16,
        color: "#0080FF",
        fontWeight: "bold",
        marginBottom: 10,
    },
    icon1: {
        height: 15,
        width: 15,
        tintColor: 'gray',
        marginRight:10,
        marginTop:4
    },
    icon2: {
        height: 15,
        width: 15,
        marginLeft:5,
        marginTop:3
    },
})
