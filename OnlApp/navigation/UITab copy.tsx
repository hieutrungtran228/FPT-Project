import * as React from 'react'
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ShipppingScreen from '../Screens/ShippingScreen'
import ListProductCopy from '../Screens/ListProduct copy'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShippingScreen from '../Screens/ShippingScreen'
import DetailsProduct from "../Screens/DetailsProduct";
import FavoriteScreen from '../Screens/FavoriteScreen';
import FlashMessage from "react-native-flash-message";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const screenOptions = ({ route }) => ({
    headerShown: false,
})
function UITabCopy(props) {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name={'Home'} component={ListProductCopy} options={{
            tabBarIcon: ({}) => (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/home.png')} />
                </View>
            ),
        }} />
        <Tab.Screen name={'Cart'} component={FavoriteScreen} options={{
            tabBarIcon: ({}) => (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image
                        style={styles.icon}
                        source={require('../assets/cart.png')} />
                </View>
            ),
        }}/>
    </Tab.Navigator>
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
})
export default UITabCopy