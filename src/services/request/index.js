import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config";

class ChenyuRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        //响应拦截器
        this.instance.interceptors.response.use((res) => {
            return res.data
        }, error => {
            return error
        })
    }

    //发送请求的方法
    request(config) {
        return this.instance.request(config)
    }

    get(config) {
        return this.request({...config, method: "get"})

    }

    post(config) {
        return this.request({...config, method: "post"})
    }
}

// 这里是用类进行封装的， 这里导出一个新对象
export default new ChenyuRequest(BASE_URL, TIMEOUT)
