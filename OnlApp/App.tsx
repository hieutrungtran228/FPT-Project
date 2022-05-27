import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import Rootstack from './navigation/Rootstack'
import store from './store'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const App = () => {

    
    return (
        <Provider store={store}>
            <PaperProvider>
                <Rootstack />
            </PaperProvider>
        </Provider>
    )
}

export default App

/**import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListProduct from '../OnlApp/Screens/ListProduct'
import FavoriteScreen from '../OnlApp/Screens/FavoriteScreen'
import { Provider } from 'react-redux';
import store from './store'
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={ListProduct} />
                <Drawer.Screen name="Notifications" component={FavoriteScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        </Provider>
    );
}
*/