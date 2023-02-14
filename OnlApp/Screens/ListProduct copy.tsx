import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet
} from 'react-native'
import Header from "../components/Header";
import getProducts from "../data/ItemProduct";
import Toast from 'react-native-toast-message';

const ListProductCopy = (props) => {

    const [dataProduct, setDataProduct] = useState([
        {
            url : 'https://akbroshop.com/wp-content/uploads/2021/07/mrxj2-av1-572x572.jpg',
            name : 'Airpod 2',
            numReviews: 3,
            rating: 4,
            price: 100,
        },
        {
            url : 'https://limota.vn/wp-content/uploads/2019/01/Amazon-Alexa-Echo-Plus-2nd-01-100x100.png',
            name : 'Amazon Alexa Echo Plus',
            numReviews: 3,
            rating: 5,
            price: 190,
        },
        {
            url : 'https://i.insider.com/5e6bc61984159f583f4c7432?width=700&format=jpeg&auto=webp',
            name : 'Logitech mouse',
            numReviews: 1,
            rating: 4.5,
            price: 3200,
        },
        {
            url : 'https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2021/04/mi-l%E1%BB%8Dc-kk-8-696x418.jpg',
            name : 'Air purifer',
            numReviews: 6,
            rating: 5,
            price: 600,
        },
        {
            url : 'http://www.vinhhungcamera.com/uploads/source/May%20anh/Canon/canon_eos_r_24_105_chinh_hang_6.jpg',
            name : 'Camera',
            numReviews: 2,
            rating: 5,
            price: 6000,
        },
        {
            url : 'https://bizweb.dktcdn.net/100/372/421/products/samsung-galaxy-s20-ultra-11.jpg?v=1661264661620',
            name : 'Galaxy S20 Ultra',
            numReviews: 5,
            rating: 5,
            price: 1200,
        },
    ])
    
    const{navigation, route} = props
    const{navigate, goBack} = navigation
    const [product, setProduct] = useState([])
    useEffect(() => {
        getProducts()
            .then(responeProduct => setProduct(responeProduct))
    }, [])
    const [searchText, setSearchText] = useState('')
    const newProduct = product.map((item,) => "https://shop-ec-pro.herokuapp.com/" + item.image)
    const renderItems = ({ item, index, image }) => {
        return (
            <View style={styles.list}>
                <View style={{
                    height: 150,
                }}>
                    <Image
                        style={styles.image}
                        source={{uri: item.url}} />
                </View>
                <View>
                    <Text
                        onPress={() => {
                            // navigate('DetailsProduct', {
                            //     _id: item._id
                            // })
                            if (item.name == 'Logitech mouse') {
                                navigate('DetailsProduct', {
                                        _id: item._id
                                     })
                            } else {
                                navigate('DetailsProductCopy', {
                                        _id: item._id
                                     })
                            }
                        }}
                        style={styles.textname}>{item.name}</Text>
                    <Text style={styles.textlist}>{item.numReviews} reviews</Text>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={styles.textlist}>{item.rating}</Text>
                        <Image
                            style={styles.star}
                            source={require('../assets/star.png')} />
                    </View>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </View>

        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#F0F8FF'
        }}>
            <Toast/>
            <Header title="Home" />
            
            <View style={styles.head}>
                <Image
                    style={styles.icon}
                    source={require('../assets/search.png')} />
                <TextInput style={styles.textinput}
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setSearchText(text)
                    }}
                />
            </View>
            <FlatList
                style={{
                    flex: 1,
                }}
                // data={product.filter(eachProduct => eachProduct.name.toLowerCase()
                //     .includes(searchText.toLowerCase()))}
                data={dataProduct.filter(eachProduct => eachProduct.name.toLowerCase()
                       .includes(searchText.toLowerCase()))}
                numColumns={2}
                // @ts-ignore
                renderItem={renderItems}
                keyExtractor={eachProduct => eachProduct.name}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    textlist: {
        marginTop: 5,
        color: 'black',
        marginHorizontal: 10,
    },
    textname: {
        marginTop: 5,
        color: 'black',
        marginHorizontal: 10,
        fontSize:15,
        fontWeight:'500'
    },
    price: {
        color: 'red',
        fontSize: 20,
        marginHorizontal: 10,
    },
    head: {
        marginHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 10,
        tintColor: 'black'
    },
    textinput: {
        flex: 1,
        backgroundColor: '#AEB1B7',
        height: 40,
        borderRadius: 8,
        opacity: 0.6,
        paddingStart: 35,
    },
    list: {
        backgroundColor: 'white',
        flex: 0.5,
        height: 270,
        margin: 10,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
    star: {
        width: 15,
        height: 15,
        marginTop: 7,
    },
    image:{
        height:150,
        width:174,
    }
})
export default ListProductCopy
/** 
{newProduct.map((photo) => {
    return (
        <Image style={{ width: 174, height: 150 }} 
        source={{ uri: photo }} />
    );
})}
{newProduct.map((photo) => {
                        return (
                            <Image 
                            style={{
                                height:30,
                                width:30,
                                resizeMode: 'cover'
                            }}
                            source={{ uri: photo }} />
                        );
                    })}
*/