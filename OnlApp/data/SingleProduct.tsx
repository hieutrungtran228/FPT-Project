import { api } from "./ItemProduct"

const ProductService ={

    getSingle({
        // @ts-ignore
        _id,
        ...restParam
    } ={}){
        return api.call().get(`/products/${_id}`,{
            params:{
                _id,
                ...restParam
            }
        })
    },
}

export default ProductService