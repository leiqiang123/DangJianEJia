import axios from 'axios'

const env = process.env.NODE_ENV  //在生产环境中被设置成production  在开发环境中被设置成development
let baseURL = env == 'production' ? '/' : '/api'


var instance = axios.create({
    baseURL,
    timeout:15000
});


const Xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params:data}, config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.post(url, data, config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default Xhr