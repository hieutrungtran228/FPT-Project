import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SigninScreen from "../screen/SigninScreen";
import SignupScreen from "../screen/SignupScreen";
import WelcomeScreen from "../screen/WelcomeScreen"
import QuestionScreen from "../screen/QuestionScreen"
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
            </Stack.Navigator>
        </NavigationContainer>
    </AuthProvider>
}

export default Rootstack