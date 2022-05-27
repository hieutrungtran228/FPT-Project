/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ShipppingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import ListProduct from './Screens//ListProduct'
import UITab from './navigation/UITab'
import Rootstack from './navigation/Rootstack'
import DetailsProduct from './Screens/DetailsProduct'
import App from './App'

AppRegistry.registerComponent(appName, () => App);
