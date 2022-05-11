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
                    <Text>
                        đoạn này thiếu
                    </Text>
                    <TouchableOpacity
                        style={styles.button}>
                        <Text
                            style={styles.textbutton}>
                            Continue
                        </Text>
                    </TouchableOpacity>
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
        backgroundColor: 'black',
        marginTop: 10,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
    },
    textbutton:{
        color: 'white',
        padding: 10,
    }
})
export default PaymentScreen;
