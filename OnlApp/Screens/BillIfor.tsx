import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Button, TextInput, RadioButton } from 'react-native-paper';
function BillInfor(props) {

    const width = Dimensions.get('window').width;
    const { navigation, routes } = props
    const { navigate, goBack } = navigation
    const buttonContinue = () => {
        navigation.navigate("ShippingScreen")
    }

    const [numberProduct, setNumberProduct] = useState('1')
    const [price, setPrice] = useState('100$')

    const pressPlus = () => {
        setNumberProduct("2")
        setPrice('200$')
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
            <View style={{ flex: 20 }} >
                <Text style={{fontSize:20, color:'black', marginLeft:20}}>
                    Product
                </Text>
                <Image
                        source={require('../assets/border.png')}
                        style={styles.borderBottom}
                    />
                <View style={{flexDirection:'row', marginLeft:17}}>
                    <Image
                        source={require('../assets/airpods.jpg')}
                        style={styles.productImage}
                    />
                    <View style={{marginTop:10}}>
                    <Text style={styles.priceTitle}>
                        Name : AirPods (2nd generation)
                    </Text>
                    <Text style={styles.priceTitle}>
                        Brand  : Apple
                    </Text>
                </View>
                </View>
                

                <View style={styles.programFooter}>
                    <Text style={styles.priceTitle}>Số lượng</Text>
                    <View style={styles.boxAmount}>
                        <View style={styles.boxPrice}>
                            <TouchableOpacity
                                style={styles.buttonMinus}
                            //onPress={() => handleToggleAmount(ticket, TOOGLE_AMOUNT_TYPE.DECREASE)}
                            >
                                <Text style={styles.button_Text}>-</Text>
                            </TouchableOpacity>
                            <View style={styles.amount}>
                                <Text>{numberProduct}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.buttonPlus}
                                onPress={() => pressPlus()}
                            >
                                <Text style={styles.button_Text}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.priceTitle}>Giá tiền:</Text>
                        <Text style={styles.textpricce}>{price}</Text>
                        {/* <Text style={styles.price}>{currencyFormatDE(ticket.price || 0)}VNĐ </Text> */}
                    </View>
                </View>

                <View style={{flexDirection:'row', marginLeft:17}}>
                    <Image
                        source={{ uri: 'https://i.insider.com/5e6bc61984159f583f4c7432?width=700&format=jpeg&auto=webp' }}
                        style={styles.productImage}
                    />
                    <View style={{marginTop:10}}>
                    <Text style={styles.priceTitle}>
                        Name : Logitech mouse
                    </Text>
                    <Text style={styles.priceTitle}>
                        Brand  : Logitech
                    </Text>
                </View>
                </View>
                

                <View style={styles.programFooter}>
                    <Text style={styles.priceTitle}>Số lượng</Text>
                    <View style={styles.boxAmount}>
                        <View style={styles.boxPrice}>
                            <TouchableOpacity
                                style={styles.buttonMinus}
                            //onPress={() => handleToggleAmount(ticket, TOOGLE_AMOUNT_TYPE.DECREASE)}
                            >
                                <Text style={styles.button_Text}>-</Text>
                            </TouchableOpacity>
                            <View style={styles.amount}>
                                <Text>1</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.buttonPlus}
                            //onPress={() => handleToggleAmount(ticket, TOOGLE_AMOUNT_TYPE.INCREASE)}
                            >
                                <Text style={styles.button_Text}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.priceTitle}>Giá tiền:</Text>
                        <Text style={styles.textpricce}>3200$</Text>
                        {/* <Text style={styles.price}>{currencyFormatDE(ticket.price || 0)}VNĐ </Text> */}
                    </View>
                </View>
                <Button
                    style={styles.button}
                    mode='contained'
                    color='black'
                    onPress={buttonContinue}
                >
                    <Text
                        style={styles.buttontext}>
                        Continue
                    </Text>
                </Button>
            </View>

            <View style={{ flex: 90, marginLeft: 20 }}>

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
        marginLeft: 10,
        marginRight: 10,
        color: 'red',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'black',
        marginTop: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttontext: {
        color: 'white',
        padding: 10,
        fontSize: 12,
    },
    programFooter: {
        marginTop:10,
        height: 47,
        backgroundColor: '#E4E5E6',
        alignSelf: 'center',
        marginBottom: 3,
        flexDirection: 'row',
        alignItems: 'center',
        width:360
    },
    priceTitle: {
        fontSize: 14,
        marginTop: 2,
        marginLeft: 14,
        lineHeight: 16,
        color: '#404041',
    },
    form: {
        fontSize: 14,
        marginLeft: 10,
        lineHeight: 16,
        color: "balck",
    },
    boxAmount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 14,
        marginLeft: 8,
        lineHeight: 16,
        color: 'red',
    },
    boxPrice: {
        flexDirection: 'row',
        borderWidth: 1,
        width: 80,
        height: 30,
        justifyContent: 'space-around',
        marginLeft: 16,
        backgroundColor: '#f2f2f2',
    },
    buttonMinus: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 3.5,
    },
    buttonPlus: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 3,
    },
    amount: {
        width: 30,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    boxTotal: {
        backgroundColor: '#58595B',
        flexDirection: 'row',
        alignItems: 'center',
        height: 66,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 16,
    },
    totalText: {
        fontSize: 18,
        lineHeight: 26,
        color: "white",
        marginLeft: 32,
    },
    totalMoneyText: {
        fontSize: 18,
        lineHeight: 26,
        color: "white",
        marginRight: 24,
    },
    button_Text: {
        color: "balck",
        fontSize: 20,
    },
    productImage: {
        width: 120,
        height: 120,
    },
    borderBottom: {
        alignSelf: 'center',
        width: 360,
        marginTop: 2,
        height: 1,
        marginBottom:10,
      },
})
export default BillInfor;
