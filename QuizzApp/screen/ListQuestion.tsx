import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from 'react'
import { Button } from "react-native-paper";

const ListQuestion = (props) => {
    const [accessToken, setAccessToken] = useState("")
    let id = props.id;
    const [answer, setAnswer] = useState("");
    const [selected1, setSelected1] = useState(false)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)
    const [selected4, setSelected4] = useState(false)

    const setScore = props.setScore


    const storeAccessToken = async () => {
        try {
            setAccessToken(await AsyncStorage.getItem("accessToken"));
        } catch (error) {
            console.log(error);
        }
    };
    storeAccessToken();

    const url = "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions/submit";

    
    const submitAnswer =  () => {
        axios.post(
            url,
                [
                    {
                        "id": id,
                        "correctanswer": answer
                    }
                ]
            ,
            { headers: {"Authorization" : `Bearer ${accessToken}`} }
        )
        .then((response) => {
            alert(response.data[0].result);
                if ((response.data[0].result) && (String(response.data[0].result) == 'true') ){
                    setScore((currScore) => currScore +1)
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <View style={{ backgroundColor: "white", height: "100%" }}>
            <Text
                style={{
                    marginTop: 40,
                    fontSize: 20,
                    fontWeight: "bold",
                    alignSelf: "center",
                    marginBottom: 40,
                }}>
                {props.question}
            </Text>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: selected1 == false ? "#99CCFF" : "#4DA6FF", }]}
                onPress={() => {
                    setAnswer(props.answer1);
                    setSelected2(false)
                    setSelected3(false)
                    setSelected4(false)
                    selected1 == false ? setSelected1(true) : setSelected1(false)
                }}>
                <View style={styles.circle}>
                    <Text style={styles.ABCD}>A</Text>
                </View>
                <Text style={styles.answerText}>{props.answer1}</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[styles.button, { backgroundColor: selected2 == false ? "#99CCFF" : "#4DA6FF", }]}
                onPress={() => {
                    setAnswer(props.answer2);
                    setSelected1(false)
                    setSelected3(false)
                    setSelected4(false)
                    selected2 == false ? setSelected2(true) : setSelected2(false)
                }}>
                <View style={styles.circle}>
                    <Text style={styles.ABCD}>B</Text>
                </View>
                <Text style={styles.answerText}>{props.answer2}</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[styles.button, { backgroundColor: selected3 == false ? "#99CCFF" : "#4DA6FF", }]}
                onPress={() => {
                    setAnswer(props.answer3);
                    setSelected1(false)
                    setSelected2(false)
                    setSelected4(false)
                    selected3 == false ? setSelected3(true) : setSelected3(false)
                }}>
                <View style={styles.circle}>
                    <Text style={styles.ABCD}>C</Text>
                </View>
                <Text style={styles.answerText}>{props.answer3}</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[styles.button, { backgroundColor: selected4 == false ? "#99CCFF" : "#4DA6FF", }]}
                onPress={() => {
                    setAnswer(props.answer4);
                    setSelected1(false)
                    setSelected2(false)
                    setSelected3(false)
                    selected4 == false ? setSelected4(true) : setSelected4(false)
                }}>
                <View style={styles.circle}>
                    <Text style={styles.ABCD}>D</Text>
                </View>
                <Text style={styles.answerText}>{props.answer4}</Text>
            </TouchableOpacity>

            <Button
                style={styles.submitBtn}
                onPress={() => {
                    props.submitAnswer(id, answer)
                }}>
                <Text style={styles.submitText}>Submit</Text>
            </Button>
            
        </View>
    );
};

export default ListQuestion;

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        marginBottom: 30,
        paddingLeft:10,
        alignItems: "center",
        alignSelf: "center",
        height: 60,
        width: 360,
        borderRadius: 100,
    },
    submitBtn: {
        height: 50,
        width: 120,
        marginBottom: 30,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#0080FF",
        borderRadius: 20,
    },
    submitText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
        alignSelf: "center",
    },
    circle: {
        marginLeft: 5,
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    ABCD: {
        fontWeight: "bold",
        color: "black",
    },
    answerText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
});