// 加入购物车
import http from "@/utils/http";

export const insertCartAPI = ({ skuId, count }) => {
    return http({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

export const findNewCartListAPI = ()=>{
    return http({
        url :'/method/cart'
    })
}

// 删除购物车
export const delCartAPI = (ids) => {
    return http({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

export const mergeCartAPI = (data) => {
    return http({
        url:'/member/cart/merge',
        method: 'POST',
        data
    })
}