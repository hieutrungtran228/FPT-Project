import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Button, TextInput, RadioButton } from 'react-native-paper';
function PlaceOder(props) {

    const { navigation, routes } = props
    const { navigate, goBack } = navigation
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const pressbutton1 = () => {
        setChecked3(false)
        setChecked1(!checked1)
        setChecked2(false)
    }
    const pressbutton2 = () => {
        setChecked3(false)
        setChecked1(false)
        setChecked2(!checked2)
    }
    const pressbutton3 = () => {
        setChecked3(!checked3)
        setChecked1(false)
        setChecked2(false)
    }
    const buttonContinue = () => {
        navigation.navigate("SuccessScreen")
    }

    const route = useRoute()
    return (
        <View
            style={{
                backgroundColor: '#F0F8FF',
                flex: 100,
            }}>
                
            <View
                style={{
                    marginTop: 70,
                    flex: 20,
                }}>
                <Text
                    style={styles.head}>
                    {' '}
                    ORDER INFORMATION
                </Text>
            </View>

            <View style={{ flex: 20, marginLeft: 20, flexDirection: 'row' }} >
                <Text style={styles.text}>Total: </Text>
                <Text style={styles.textpricce}>3400$</Text>
            </View>

            <View style={{ flex: 20, marginLeft: 20 }} >
                <Text style={styles.text}>SHIPPING ADDRESS</Text>
                <Text style={styles.textinfor}>{route.params.address}, {route.params.city}, {route.params.country} </Text>
            </View>

            <View>
                <Text style={styles.cartInfoText}>PHƯƠNG THỨC THANH TOÁN</Text>
                {/* <Image
                    source={require('../Booking/assets/border.png')}
                    style={styles.borderBottom}
                /> */}
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <Image
                    source={require('../assets/ic_vnPay.png')}
                    style={styles.vnPayIcon}
                />
                <Image
                    source={require('../assets/ic_viettelPay.png')}
                    style={styles.vnPayIcon}
                />
            </View>
            <View style={styles.paymentOther}>
                <View style={styles.buttonPaymentOther}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/ic_qrCode.png')}
                            style={styles.paymentIconQR}
                        />
                        <Text style={[styles.paymentText, { marginLeft: 20 }]}>
                            Quét mã QR
                        </Text>
                        <View style={{ marginLeft: 205 }}>
                            <RadioButton
                                value="first"
                                color='grey'
                                status={checked1 === true ? 'checked' : 'unchecked'}
                                onPress={pressbutton1}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonPaymentOther}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/ic_atm.png')}
                            style={styles.paymentOtherIcon}
                        />
                        <Text style={styles.paymentText}>
                            Thẻ ATM/ tài khoản ngân hàng
                        </Text>
                        <View style={{ marginLeft: 72 }}>
                            <RadioButton
                                value="first"
                                color='grey'
                                status={checked2 === true ? 'checked' : 'unchecked'}
                                onPress={pressbutton2}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonPaymentOther}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/ic_visa.png')}
                            style={styles.paymentOtherIcon}
                        />
                        <Text style={styles.paymentText}>Thẻ thanh toán quốc tế</Text>
                    </View>
                    <View>
                        <RadioButton
                            value="first"
                            color='grey'
                            status={checked3 === true ? 'checked' : 'unchecked'}
                            onPress={pressbutton3}
                        />
                    </View>
                </View>
            </View>

            <View style={{ flex: 90, marginLeft: 20 }}>
                <Button
                    style={styles.button}
                    mode='contained'
                    color='black'
                    onPress={buttonContinue}
                >
                    <Text
                        style={styles.buttontext}>
                        Place Order
                    </Text>
                </Button>
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
    text: {
        fontSize: 20,
        marginTop: 10,
        color: 'black',
        fontWeight: '600'
    },
    textinfor: {
        fontSize: 16,
        marginTop: 10,
        color: 'grey'
    },
    textpricce: {
        fontSize: 16,
        marginTop: 13,
        color: 'red',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'black',
        marginTop: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    buttontext: {
        color: 'white',
        padding: 10,
        fontSize: 12,
    },
    paymentApp: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    buttonPaymentApp: {
        marginLeft: 32,
    },
    paymentOther: {
        marginLeft: 16,
    },
    paymentOtherIcon: {
        width: 34,
        height: 23,
    },
    paymentIconQR: {
        width: 30,
        height: 30,
    },
    buttonPaymentOther: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 14,
        height: 20,
        justifyContent: 'space-between',
    },
    paymentText: {
        marginLeft: 16,
        marginTop: 2,
        fontSize: 16,
        color: '#404041',
        lineHeight: 20,
        textAlign: 'center',
    },
    radioButton: {
        width: 35,
        height: 18,
        marginRight: 32,
        marginBottom: 15,
    },
    radioButtonCustom: {
        width: 35,
        height: 18,
        marginRight: -20,
        marginBottom: 0,
    },
    cartInfoText: {
        fontSize: 20,
        lineHeight: 26,
        color: 'black',
        marginLeft: 20,
        marginTop: 24,
        fontWeight:'600'
    },
    vnPayIcon: {
        marginLeft: 16,
    },
})
export default PlaceOder;
