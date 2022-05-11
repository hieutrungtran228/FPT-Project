import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ShipppingScreen from '../Screens/ShippingScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import ListProduct from '../Screens/ListProduct'
import UITab from "./UITab";

const Stack = createNativeStackNavigator()
function App(props){
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="ListProduct" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
            <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
            <Stack.Screen name={'ShipppingScreen'} component={ShipppingScreen} />
            <Stack.Screen name={'PaymentScreen'} component={PaymentScreen} />
            <Stack.Screen name={'ListProduct'} component={ListProduct} />
            <Stack.Screen name={"UITab"} component={UITab} />
        </Stack.Navigator>
    </NavigationContainer>
}
export default App