import axios from "axios";

const getQuestion = async () => {
    try {
        let response = await axios.get('https://fwa-ec-quiz-mock1.herokuapp.com/v1/questions?page=1&limit=4')
        if ( response.status != 200) {
            throw 'lỗi rồi'
        }
        throw 'no question'
    } catch (error){
        throw error
    }
}

export default getQuestion