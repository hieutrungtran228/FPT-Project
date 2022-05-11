import { resolvePlugin } from '@babel/core';
import axois from 'axios'

export interface IProduct {
    imageurl: string;
    rating: number;
    numreviews: number;
    price: number;
    countInStock: number;
    _id: string;
    name: string;
    descriptions: string;
    brand: string;
    category: string;
    user: string;
    reviews: [
        id: string,
        name: string,
        rating: number,
        comment: string,
        user: string,
        createdAt: string,
        updatedAt: string,
    ]
    __v: number;
    createdAt: string;
    updatedAt: string;
}

const getProducts = async () => {
    try {
        //alert('buần')
        let response = await axois.get('https://shop-ec-pro.herokuapp.com/api/products')
        if (response.status != 200){
            throw 'lỗi rồi'
        }
        if (response.data.products.length > 0){
            let responeProduct = response.data.products;
            return responeProduct
        }
        throw 'no product'
    } catch (error) {
        throw error
    }
}
export default getProducts