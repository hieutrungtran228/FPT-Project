import React ,{ useState, useEffect }from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import ListProduct from "./ListProduct";
import getProducts from "../data/ItemProduct";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { Button } from "react-native-paper";

const FavoriteScreen = (props) => {

    const [dataProduct, setDataProduct] = useState([
        {
            url : 'https://akbroshop.com/wp-content/uploads/2021/07/mrxj2-av1-572x572.jpg',
            name : 'Airpod 2',
            numReviews: 3,
            rating: 4,
            price: 100,
        },
        {
            url : 'https://i.insider.com/5e6bc61984159f583f4c7432?width=700&format=jpeg&auto=webp',
            name : 'Logitech mouse',
            numReviews: 1,
            rating: 4.5,
            price: 3200,
        },
        
    ])
    const { navigation, routes } = props
    const { navigate, goBack } = navigation
    const [Product, setProduct] = useState([])
    useEffect(() => {
        getProducts()
            .then(responeProduct => setProduct(responeProduct))
    }, [])
    const favoriteData = useSelector(state => state.Favorite.items)
    const [items, setItems] = useState([])
    console.log('favoriteData', favoriteData);
    
    useEffect (() => {
        let itemsFavorite = Product.filter(item => favoriteData.indexOf(item._id) !== -1)
        setItems(itemsFavorite)
    }, [favoriteData])
    
    const renderItems = ({ item, index, image }) => {
        return (
            <View style={styles.list}>
                <View style={{
                    height: 150,
                }}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.url }} />
                </View>
                <View>
                    <Text
                        onPress={() => {
                            navigate('DetailsProduct', {
                                _id: item._id
                            })
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
            <Header title='My Cart'/>
            <FlatList
                style={{
                    flex: 1,
                }}
                data={dataProduct}
                numColumns={2}
                // @ts-ignore
                renderItem={renderItems}
                keyExtractor={eachProduct => eachProduct.name}
            />
            <Button
                style={styles.button}
                mode='contained'
                color='black'
                onPress={() => {
                    navigate('BillInfor')
                }}>
                <Text
                    style={styles.buttontext}>
                    Proceed to checkout
                </Text>
            </Button>
        </View>
    )
}

export default FavoriteScreen

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
    buttontext: {
        color: 'white',
        padding: 10,
        fontSize: 12,
    },
    button: {
        backgroundColor: 'black',
        marginTop: 10,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        alignSelf:'center'
    },
    image:{
        height:150,
        width:174,
    }
})