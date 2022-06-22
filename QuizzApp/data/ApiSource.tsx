import axios from 'axios'

const baseURL = 'https://fwa-ec-quiz-mock1.herokuapp.com'
export const api = {
    call: () => {
        return axios.create({
            baseURL
        })
    }
}