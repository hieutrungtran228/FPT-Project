import axois from 'axios'


const baseURL = 'https://shop-ec-pro.herokuapp.com/api'
export const api = {
    call: () => {
        return axois.create({
            baseURL
        })
    }
}

const getProducts = async () => {
    try {
        //alert('buần')
        let response = await axois.get('https://shop-ec-pro.herokuapp.com/api/products')
        if (response.status != 200) {
            throw 'lỗi rồi'
        }
        if (response.data.products.length > 0) {
            let responeProduct = response.data.products;
            return responeProduct
        }
        throw 'no product'
    } catch (error) {
        throw error
    }
}
export default getProducts