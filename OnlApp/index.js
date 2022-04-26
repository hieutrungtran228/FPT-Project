/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ShipppingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import ListProduct from './Screens//ListProduct'
import Home from './Screens/Home'

AppRegistry.registerComponent(appName, () => PaymentScreen);
