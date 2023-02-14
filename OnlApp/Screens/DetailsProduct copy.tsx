import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../store/slices/product';
import { useEffect } from 'react';
import { Button, TextInput} from 'react-native-paper';
import { Favorite } from '../store/slices/addtocart';
function DetailsProductCopy(props) {

    const { navigation, routes } = props
    const { navigate, goBack } = navigation

    const [text, setText] = useState('')
    // @ts-ignore
    //const isLogin = useSelector(state => state.Auth.isLogin)
    const [isLogin, setIsLogin] = useState(true)
    console.log(isLogin);
    
    const [showOption, setShowOption] = useState(false)
    const [numReviews, setNumReviews] = useState("2")
    const pressSubmit = () => {
        setShowOption(true)
        setText('')
        setNumReviews('3')
    }
    const dispatch = useDispatch()
    const route = useRoute();
    // @ts-ignore
    const product = useSelector(state => state.Product.product)
    // @ts-ignore
    const { _id } = route.params
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchSingleProduct({ _id }))
    }, [])
    const [buttonName, setbuttonName] = useState('Add to cart')
    const add = () => {
        setbuttonName('Remove from cart')
    }
    const [dataProduct, setDataProduct] = useState([
        {
            url : 'https://i.insider.com/5e6bc61984159f583f4c7432?width=700&format=jpeg&auto=webp',
            name : 'Logitech mouse',
            numReviews: 1,
            rating: 4.5,
            price: 3200,
        },
    ])

    return (
        <ScrollView
            style={{
                backgroundColor: '#F0F8FF',
                flex: 100,
            }}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'pink',
                    height: 350,
                }}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://akbroshop.com/wp-content/uploads/2021/07/mrxj2-av1-572x572.jpg'}} />
            </View>
            <View>
                <Text style={styles.textname}>
                Airpod 2
                </Text>
                <Text style={styles.price}>
                    $100
                </Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={styles.textlist}>4</Text>
                    <Image
                        style={styles.star}
                        source={require('../assets/star.png')} />
                    <Text style={styles.textlist}>{numReviews} reviews</Text>
                    <Text style={styles.status}>
                                    In Stock
                                </Text>
                    {/* {(() => {
                        if (product.countInStock < 0) {
                            return (
                                <Text style={styles.status}>
                                    In Stock
                                </Text>
                            )
                        } else {
                            return (
                                <Text style={styles.status}>
                                    Out Of Stock
                                </Text>
                            )
                        }
                    })()} */}
                </View>
                <Text style={styles.script}>
                    With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case, AirPods deliver an incredible wireless headphone experience. Simply take them out and they’re ready to use with all your devices. Put them in your ears and they connect immediately, immersing you in rich, high-quality sound. Just like magic.
                </Text>

                <View style={{ flexDirection: 'row', marginLeft: 15, marginTop:10}}>
                    <View>
                        <Image
                            style={styles.imagecmt}
                            source={require('../assets/noava.png')} />
                    </View>
                    <View>
                        <Text style={{marginLeft:10}}>
                        trq311zpyw
                        </Text>
                        <Text style={{marginLeft:10}}>
                        🌟🌟
                        </Text>
                    </View>
                </View>
                <Text style={{marginLeft:15, fontSize:17, color:'black'}}>
                    Too expensive
                </Text>
                <Text style={{marginLeft:15, fontSize:12}}>
                    2022-09-14 12:23
                </Text>

                <View style={{ flexDirection: 'row', marginLeft: 15, marginTop:10}}>
                    <View>
                        <Image
                            style={styles.imagecmt}
                            source={require('../assets/noava.png')} />
                    </View>
                    <View>
                        <Text style={{marginLeft:10}}>
                        cnguyn824
                        </Text>
                        <Text style={{marginLeft:10}}>
                        🌟🌟🌟🌟🌟
                        </Text>
                    </View>
                </View>
                <Text style={{marginLeft:15, fontSize:17, color:'black'}}>
                    This product is good
                </Text>
                <Text style={{ marginLeft: 15, fontSize: 12 }}>
                    2022-10-02 00:10
                </Text>

                {showOption && (
                    <View>
                        <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10 }}>
                            <View>
                                <Image
                                    style={styles.imagecmt}
                                    source={require('../assets/noava.png')} />
                            </View>
                            <View>
                                <Text style={{ marginLeft: 10 }}>
                                    test1
                                </Text>
                                {/* <Text style={{ marginLeft: 10 }}>
                                    🌟🌟🌟🌟🌟
                                </Text> */}
                            </View>
                        </View>
                        <Text style={{ marginLeft: 15, fontSize: 17, color: 'black' }}>
                            test comment
                        </Text>
                        <Text style={{ marginLeft: 15, fontSize: 12 }}>
                            2022-10-23 17:32
                        </Text>
                    </View>
                )}

                <Text style={styles.review}>WRITE A CUSTOMER REVIEW</Text>
                {
                    !isLogin ? (
                        <Text
                            onPress={
                                navigate('SignInScreen')
                            }
                            style={styles.script}>
                            Login to write review
                        </Text>
                    ) : (
                        <View style={{ marginHorizontal: 10 }}>
                            <TextInput
                                label="Review"
                                value={text}
                                onChangeText={text => setText(text)}
                            />
                            <Button
                                style={styles.button}
                                mode='contained'
                                color='black'
                                // @ts-ignore
                                onPress={pressSubmit}>
                                <Text
                                    style={styles.buttontext}>
                                    Submit
                                </Text>
                            </Button>
                        </View>
                    )
                }
            </View>
            <Button
                style={styles.addbutton}
                mode='contained'
                color='black'
                onPress={add}>
                <Text
                    style={styles.buttontext}>
                    {buttonName}
                </Text>
            </Button>
            {/* {(() => {
                if (product.countInStock > 0) {
                    return (
                        <Button
                            style={styles.addbutton}
                            mode='contained'
                            color='black'
                            onPress={add}>
                            <Text
                                style={styles.buttontext}>
                                Add to cart
                            </Text>
                        </Button>
                    )
                } else {
                    return (
                        <Button
                            style={styles.addbutton}
                            mode='contained'
                            color='black'>
                            <Text
                                style={styles.buttontext}>
                                Out of stock
                            </Text>
                        </Button>
                    )
                }
            })()} */}
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    head: {
        flex: 1
    },
    textlist: {
        marginTop: 10,
        marginLeft: 15,
        color: 'black',
        marginHorizontal: 10,
        fontSize: 20,
    },
    textname: {
        marginTop: 10,
        marginLeft: 15,
        color: 'black',
        marginHorizontal: 10,
        fontSize: 25,
        fontWeight:'500'
    },
    price: {
        color: 'red',
        marginLeft: 15,
        fontSize: 17,
        marginTop: 5,
    },
    star: {
        width: 20,
        height: 20,
        marginTop: 12,
    },
    status: {
        marginTop: 10,
        marginLeft: 80,
        color: 'gray',
        marginHorizontal: 10,
        fontSize: 20,
    },
    script: {
        marginTop: 20,
        marginLeft: 15,
        color: 'black',
        marginHorizontal: 10,
        fontSize: 19,
    },
    review: {
        marginTop: 10,
        marginLeft: 15,
        color: '#5E5C5C',
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'black',
        marginTop: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        color: 'white',
        padding: 10,
        fontSize: 12,
    },
    addbutton: {
        backgroundColor: 'black',
        marginTop: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 35,
        marginBottom: 10,
    },
    image:{
        height:350,
        width:395,
    },
    imagecmt:{
        height:40,
        width:40,
        borderRadius:100,
    }
})


export default DetailsProductCopy


