import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import Rootstack from './navigation/RootStack'
import store from './store'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {

    useEffect(() => {
        const getData = async () => {
            try{
                const value = await AsyncStorage.getItem('token')
                if(value !== null){
                    console.log('value', value);
                    
                }
            } catch(e){
                console.log(e);
                
            }
        }
        getData()
    }, [])

    return (
        <Provider store={store}>
            <PaperProvider>
                <Rootstack />
            </PaperProvider>
        </Provider>
    )
}

export default App