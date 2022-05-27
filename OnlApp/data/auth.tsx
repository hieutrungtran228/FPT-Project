import { api } from "./ItemProduct";

const AuthService = {
    login({
        email,
        password
    } = {}) {
        return api.call().post(`/users/login`, {
            email,
            password
        })
    },
    register({
        name,
        email,
        password,
    } = {}) {
        return api.call().post(`/users`, {
            name,
            email,
            password,
        })
    }
}

export default AuthService