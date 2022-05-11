import * as React from 'react'
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ShipppingScreen from '../Screens/ShippingScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import ListProduct from '../Screens/ListProduct'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator()
const screenOptions = ({route})=>({
    headerShown: false
})
function UITab(props){
    return <Tab.Navigator>
        <Tab.Screen name={'ListProduct'} component ={ListProduct}/>
        <Tab.Screen name={'PaymentScreen'} component ={PaymentScreen}/>
        <Tab.Screen name={'ShipppingScreen'} component ={ShipppingScreen}/>
        <Tab.Screen name={'SignInScreen'} component ={SignInScreen}/>
        <Tab.Screen name={'SignUpScreen'} component ={SignUpScreen}/>
    </Tab.Navigator>
}

export default UITab