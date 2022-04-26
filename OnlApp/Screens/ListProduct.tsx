import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native'
import ItemProduct from "../data/ItemProduct";
import Item from "../data/ItemProduct";


function ListProduct(props) {
    
    const [product, setProduct] = useState({})
    useEffect(() => {
        Item()
            .then(responeProduct => setProduct(responeProduct))
    },[])
    const {name , price, numreview, brand, category, cit, createdAt, 
        des, rate, updatedAt, user, __v, _id, reComment} = product
    
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'green'
        }}>
            
            <Text>name : {product.name}</Text>
        </View>
    )
}

export default ListProduct

/** 
<Image 
style={{
    width:168,
    height:160,
    resizeMode: 'cover',
    marginTop:5,
    marginHorizontal:5,
}}
source={{
    uri: item.url
}}/>
<Text style={{
    color:'black',
    marginHorizontal:15,
}}>
    {item.productName}
</Text>

<FlatList
                style={{ marginTop: 5 }}
                data={ItemProduct}
                numColumns={2}
                renderItem={({ item, index, }) => <View style={{
                    flex: 0.5,
                    height: 300,
                    margin: 10,
                    marginBottom: 5,
                    marginLeft: index % 2 == 0 ? 10 : 0,
                    marginTop: 5,
                    marginRight: 10,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'black'
                }}>
                    <View style={{
                        flexDirection: 'column',
                    }}>
                        <Image
                            style={{
                                width: 168,
                                height: 160,
                                resizeMode: 'cover',
                                marginTop: 5,
                                marginHorizontal: 5,
                            }}
                            source={{
                                uri: item.url
                            }} />
                        <Text style={{
                            color: 'black',
                            marginHorizontal: 15,
                        }}>
                            {item.productName}
                        </Text>
                    </View>
                </View>}
            />
*/
