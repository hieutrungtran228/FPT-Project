import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SigninScreen from "../screen/SigninScreen";
import SignupScreen from "../screen/SignupScreen";
import WelcomeScreen from "../screen/WelcomeScreen"
import QuestionScreen from "../screen/QuestionScreen"
import DetailsScreen from "../screen/DetailsScreen"
import ListQuestion from "../screen/ListQuestion"
import QuizScreen from "../screen/QuizScreen"
import ResultScreen from "../screen/ResultScreen"
import QuizScreenTest from "../screen/QuizScreenTest"

import { AuthProvider } from "./AuthProvider";

const Stack = createNativeStackNavigator();

function Rootstack(props) {
    return <AuthProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />
                <Stack.Screen name={"SigninScreen"} component={SigninScreen} />
                <Stack.Screen name={"SignupScreen"} component={SignupScreen} />
                <Stack.Screen name={"QuestionScreen"} component={QuestionScreen} />
                <Stack.Screen name={"DetailsScreen"} component={DetailsScreen} />
                <Stack.Screen name={"ListQuestion"} component={ListQuestion} />
                <Stack.Screen name={"QuizScreen"} component={QuizScreen} />
                <Stack.Screen name={"ResultScreen"} component={ResultScreen} />
                <Stack.Screen name={"QuizScreenTest"} component={QuizScreenTest} />
            </Stack.Navigator>
        </NavigationContainer>
    </AuthProvider>
}

export default Rootstack