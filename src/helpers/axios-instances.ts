import axios, {AxiosError} from 'axios'
const baseURL = 'http://localhost:8080'

const axiosJsonIns = axios.create({
    baseURL,
    timeout: 4000,
})
axiosJsonIns.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token')
    config.headers = {
        'Content-Type': 'application/json',
        'Authorization': token ?? '',
    }
    return config
}, function (config) {
    return config
})
axiosJsonIns.interceptors.response.use(function (response) {
    return response
}, function (error: AxiosError) {
    if (error.response?.status === 401) {
        localStorage.removeItem('token')
    }
    return Promise.reject(error)
})

//FOR MULTIPART FD
const axiosMultiPartIns = axios.create({
    baseURL,
    timeout: 8000,
})
axiosMultiPartIns.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token')
    config.headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': token ?? '',
    }
    return config
}, function (config) {
    return config
})
axiosMultiPartIns.interceptors.response.use(function(response) {
    return response
}, function(error: AxiosError) {
    if (error.response?.status === 401) {
        localStorage.removeItem('token')
    }
    return Promise.reject(error)
})

export { axiosJsonIns, axiosMultiPartIns }
