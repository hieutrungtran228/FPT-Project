import React from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Button, Checkbox, RadioButton} from 'react-native-paper';

function PaymentScreen(props) {
    return (
        <View
            style={{
                backgroundColor: '#F0F8FF',
                flex: 100,
            }}>
            <View
                style={{
                    marginTop: 70,
                    flex: 10,
                }}>
                <Text
                    style={styles.head}>
                    {' '}
                    PAYMENT METHOD
                </Text>
            </View>

            <View
                style={{
                    flex: 80,
                }}>
                <View
                    style={styles.body}>
                    <Text
                        style={styles.text}>
                        Select method
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{marginTop:5, fontSize:17}}>
                            PayPal or Credit Card
                        </Text>
                        <RadioButton.Android value='test' status='checked' color='gray'/>
                    </View>
                    <Button
                        style={styles.button}
                        mode='contained'
                        color='black'
                        onPress={() => {
                        }}>
                        <Text
                            style={styles.buttontext}>
                            Continue
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        color: 'black',
        fontSize: 35,
        marginLeft: 10,
    },
    body:{
        height: 50,
        marginHorizontal: 10,
    },
    text:{
        fontSize: 25,
        marginTop: 10,
        color:'black',
    },
    button:{
        marginTop: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbutton:{
        color: 'white',
        padding: 10,
    },
    buttontext: {
        color: 'white',
        padding: 10,
        fontSize: 12,
    },
})
export default PaymentScreen;
