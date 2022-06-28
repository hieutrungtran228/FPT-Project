import React from "react";
import { View, StyleSheet, ListRenderItem, ScrollView, Text } from "react-native";
import axios from "axios";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-paper";

const HEADER_HEIGHT = 250;
import ListQuestion from "./ListQuestion";

function QuizMain(props) {

    const { navigation, route } = props
    const { navigate, goBack } = navigation
    let id = props.id;
    const [answer, setAnswer] = useState("");
    
    const [accessToken, setAccessToken] = useState(route.params.accessToken);
    const [question, setQuestion] = useState("");
    const [score, setScore] = useState(0);

    const getBackPressed = () => {
        console.log("hello");
    };

    const endQuizPressed = () => {
        console.log('paylod',payload)
        
        axios
            .post(
                "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions/submit",
                payload,
                { headers: { Authorization: `Bearer ${accessToken}` } }
            )
            .then((response) => {
                /*alert(response.data.result);
                if (
                    response.data.result &&
                    String(response.data.result) == "true"
                ) {
                    setScore((currScore) => currScore + 1);
                }
                console.log('dap an',response.data.result)*/
                let count = 0
                for (let i = 0; i < response.data.length; i++) {
                    const ans = response.data.result
                    if (String(ans) == "true") {
                        count += 1
                        setScore(count);
                    }
                }
                if (score != 0) {
                    console.log('diem',score)
                    alert(score)
                }
                navigate("ResultScreen", { totalScore: score });
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const storeAccessToken = async () => {
        try {
            setAccessToken(await AsyncStorage.getItem("accessToken"));
        } catch (error) {
            console.log(error);
        }
    };
    storeAccessToken();


    const getQuestion = () => {
        axios
            .get(
                "https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions?page=1&limit=11",
                { headers: { Authorization: `Bearer ${accessToken}` } }
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
        getQuestion();
    }


    var payload = [];
    const submitAnswer = (question_id, chosen_answer) => {
        payload.push({
            id: question_id,
            correctanswer: chosen_answer,
        });
        console.log(payload);
    };






    return (
        <ScrollView>
            <ScrollView>

                <ListQuestion
                    question={question[0]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[0]?.["id"]}
                    answer1={question[0]?.["answer1"]}
                    answer2={question[0]?.["answer2"]}
                    answer3={question[0]?.["answer3"]}
                    answer4={question[0]?.["answer4"]}
                />
            </ScrollView>



            <ScrollView>
                <ListQuestion
                    question={question[1]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[1]?.["id"]}
                    answer1={question[1]?.["answer1"]}
                    answer2={question[1]?.["answer2"]}
                    answer3={question[1]?.["answer3"]}
                    answer4={question[1]?.["answer4"]}
                />
            </ScrollView>



            <ScrollView>
                <ListQuestion
                    question={question[2]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[2]?.["id"]}
                    answer1={question[2]?.["answer1"]}
                    answer2={question[2]?.["answer2"]}
                    answer3={question[2]?.["answer3"]}
                    answer4={question[2]?.["answer4"]}
                />
            </ScrollView>



            <ScrollView>
                <ListQuestion
                    question={question[3]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[3]?.["id"]}
                    answer1={question[3]?.["answer1"]}
                    answer2={question[3]?.["answer2"]}
                    answer3={question[3]?.["answer3"]}
                    answer4={question[3]?.["answer4"]}
                />
            </ScrollView>



            <ScrollView>
                <ListQuestion
                    question={question[4]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[4]?.["id"]}
                    answer1={question[4]?.["answer1"]}
                    answer2={question[4]?.["answer2"]}
                    answer3={question[4]?.["answer3"]}
                    answer4={question[4]?.["answer4"]}
                />
            </ScrollView>



            <ScrollView>
                <ListQuestion
                    question={question[5]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[5]?.["id"]}
                    answer1={question[5]?.["answer1"]}
                    answer2={question[5]?.["answer2"]}
                    answer3={question[5]?.["answer3"]}
                    answer4={question[5]?.["answer4"]}
                />
            </ScrollView>



            <ScrollView>
                <ListQuestion
                    question={question[6]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[6]?.["id"]}
                    answer1={question[6]?.["answer1"]}
                    answer2={question[6]?.["answer2"]}
                    answer3={question[6]?.["answer3"]}
                    answer4={question[6]?.["answer4"]}
                />
            </ScrollView>



            <ScrollView>
                <ListQuestion
                    question={question[7]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[7]?.["id"]}
                    answer1={question[7]?.["answer1"]}
                    answer2={question[7]?.["answer2"]}
                    answer3={question[7]?.["answer3"]}
                    answer4={question[7]?.["answer4"]}
                />
            </ScrollView>

            <ScrollView>
                <ListQuestion
                    question={question[8]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[7]?.["id"]}
                    answer1={question[8]?.["answer1"]}
                    answer2={question[8]?.["answer2"]}
                    answer3={question[8]?.["answer3"]}
                    answer4={question[8]?.["answer4"]}
                />
            </ScrollView>

            <ScrollView>
                <ListQuestion
                    question={question[9]?.["question"]}
                    onPress={endQuizPressed}
                    submitAnswer={submitAnswer}
                    setScore={setScore}
                    id={question[7]?.["id"]}
                    answer1={question[9]?.["answer1"]}
                    answer2={question[9]?.["answer2"]}
                    answer3={question[9]?.["answer3"]}
                    answer4={question[9]?.["answer4"]}
                />
            </ScrollView>


            <Button
                style={styles.submitBtn}
                onPress={endQuizPressed}
                //onPress={() => console.log(payload)}
            >
                <Text style={styles.submitText}>End Quiz</Text>

            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    submitBtn: {
        marginBottom: 30,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#0080FF",
        height: 50,
        width: 120,
        borderRadius: 20,
    },
    submitText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
        alignSelf: "center",
    },
});

export default QuizMain;
