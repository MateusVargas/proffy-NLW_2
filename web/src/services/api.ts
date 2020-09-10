import axios from 'axios'

export const getApiUrl = (path:string) => {
    return `http://localhost:3333/${path}`
}

const configHeaders = () => {
    const token: string | null = localStorage.getItem('token')
    if(token){
        return axios.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
    }
}

export const apiPost = (path:string, data = {}) => {
    configHeaders()
    const url = getApiUrl(path)
    return axios.post(url, data)
}

export const apiPut = (path:string, data = {}) => {
    configHeaders()
    const url = getApiUrl(path)
    return axios.put(url, data)
}

export const apiGet = (path:string, data = {}) => {
    configHeaders()
    const url = getApiUrl(path)
    return axios.get(url, data)
}

export const apiDelete = (path:string) => {
    configHeaders()
    const url = getApiUrl(path)
    return axios.delete(url)
}