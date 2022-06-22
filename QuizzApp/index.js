/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import WelcomeScreen from './screen/WelcomeScreen'
import SigninScreen from './screen/SigninScreen'
import SignupScreen from './screen/SignupScreen'
import QuestionScreen from './screen/QuestionScreen'

AppRegistry.registerComponent(appName, () => App);
