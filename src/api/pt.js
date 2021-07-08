import { httpPost, httpGet, httpBlobGet } from '@/utils/http'

class User {
    static getDetail (data) { // 专利详情
        return httpGet('/wx/product/info', data)
    }

    static search (data) { // 专利购买 - 筛选
        return httpPost('/wx/productsearch/v2/search', data)
    }

    static ptScope (data) { // 专利购买 - 子类
        return httpPost('/wx/productsearch/conditions/patentFields', data)
    }

    static getIntcls (data) { // 所属分类
        return httpGet('/wx/product/getIPCItems', data)
    }

    static getSamePro (data) { // 同类推荐
        return httpPost('/productrecommend/querySameType', data)
    }

    static addition (data) { // 获取增值服务
        return httpGet('/wx/product/getAdditionOfProduct', data)
    }

    static entire (data) { // 获取增值服务费用
        return httpPost('/orders/patentOrderPreview', data)
    }

    static create (data) { // 下单
        return httpPost('/orders/createPatent', data)
    }

    static orderDetail (data) { // 获取订单详情
        return httpGet('/wx/orderDetail/read', data)
    }

    static getLeftTime (data) { // 获取倒计时
        return httpGet('/wx/orderDetail/getExpired', data)
    }

    static getServiceSupplier (data) { // 点击支付
        return httpGet('/orderpay/getServiceSupplier', data)
    }

    static pay (data) { // 支付
        return httpPost('/orderpay/order', data)
    }

    static bookList (data) { // 我的订单-订单列表
        return httpGet('/wx/orderDetail/listAll', data)
    }

    static getOrderConunt (data) { // 我的订单-订单统计
        return httpGet('/wx/orderDetail/index', data)
    }
}

export default User
