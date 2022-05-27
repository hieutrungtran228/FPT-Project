import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ShippingScreen from '../Screens/ShippingScreen'
import ListProduct from '../Screens/ListProduct'
import UITab from "./UITab";
import DetailsProduct from "../Screens/DetailsProduct";
import FavoriteScreen from '../Screens/FavoriteScreen';
import PlaceOrder from "../Screens/PlaceOrder";
import { AuthProvider } from "./AuthProvider";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function Rootstack() {
    return <AuthProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListProduct" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={"UITab"} component={UITab} />
                <Stack.Screen name={'DetailsProduct'} component={DetailsProduct} />
                <Stack.Screen name={'FavoriteScreen'} component={FavoriteScreen} />
                <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
                <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
                <Stack.Screen name={'ShippingScreen'} component={ShippingScreen} />
                <Stack.Screen name={'PlaceOrder'} component={PlaceOrder} />
            </Stack.Navigator>
        </NavigationContainer>
    </AuthProvider>
}
export default Rootstack
/**<Stack.Navigator initialRouteName="ListProduct" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={"UITab"} component={UITab} />
                <Stack.Screen name={'DetailsProduct'} component={DetailsProduct} />
                <Stack.Screen name={'FavoriteScreen'} component={FavoriteScreen} />
                <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
                <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
                <Stack.Screen name={'ShippingScreen'} component={ShippingScreen} />
                <Stack.Screen name={'PaymentScreen'} component={PaymentScreen} />
                <Stack.Screen name={'Drawer'} component={Drawer} />
            </Stack.Navigator>
            <FlashMessage position={'top'} />*/