import { httpPost, httpGet } from '../utils/http'

class Contact {
    static sendMsg (data) {
        return httpPost('/app/dongguan/sendMessage', data)
    }

    static getDetail (data) {
        return httpGet('/app/dongguan/detail', data)
    }
}

export default Contact
