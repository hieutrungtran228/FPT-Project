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
import getProducts from "../data/ItemProduct";

const ListProduct = () => {

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
                    backgroundColor: 'green',
                }}>
                    {newProduct.map((photo) => {
                        return (
                            <View style={{
                                backgroundColor:'red',
                                height:30,
                                width:178,
                                marginBottom:16
                            }}>
                                <Image source={{ uri: photo }} />
                            </View>
                        );
                    })}
                </View>
                <View>
                    <Text style={styles.textlist}>{item.name}</Text>
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
            backgroundColor: 'lightblue'
        }}>
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
                data={product.filter(eachProduct => eachProduct.name.toLowerCase()
                                        .includes(searchText.toLowerCase()))}
                numColumns={2}
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
    price: {
        color: 'black',
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
    list:{
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
    star:{
        width: 15,
        height: 15,
        marginTop: 7,
    },
})
export default ListProduct
/** 
{newProduct.map((photo) => {
    return (
        <Image style={{ width: 174, height: 150 }} 
        source={{ uri: photo }} />
    );
})}
*/