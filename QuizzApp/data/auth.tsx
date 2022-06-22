import { api } from "./ApiSource";

const AuthService = {

    login({
        username,
        password,
    } = {}) {
        return api.call().post(`/v1/auth/login`, {
            username,
            password,
        })
    },
    register({
        username,
        password,
        email,
    } = {}) {
        return api.call().post(`/v1/auth/register`, {
            username,
            password,
            email,
        })
    },
    list({
        page = 1,
        limit = 4,
        ...restParam
    } = {}) {
        return api.call().get(`/v1/questions?page=1&limit=4`, {
            params : {
                page,
                limit,
                ...restParam
            }
        })
    },
}

export default AuthService