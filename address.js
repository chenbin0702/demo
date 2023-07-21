import request from '@/utils/request'
// 地址解析
export function addressParse(data) {
  return request({
    url: '/cps/web/user-address/parse',
    method: 'post',
    data: data
  })
}
// 新增地址 /cps/web/user-address
export function userAddress(data) {
  return request({
    url: '/cps/web/user-address',
    method: 'post',
    data: data
  })
}
// 分页查询地址列表 /cps/open/user-address/page GET
export function getAddressPage(query) {
  return request({
    url: '/cps/web/user-address/page',
    method: 'get',
    params: query
  })
}
// 订单需求确认-点击寄快递｜/cps/web/order/demand
export function OrderDemand(data) {
  return request({
    url: '/cps/web/order/demand',
    method: 'post',
    data: data
  })
}
// 查询地址信息 /cps/web/user-address/{userAddressId}
export function getUserAddress(userAddressId) {
  return request({
    url: '/cps/web/user-address/'+userAddressId,
    method: 'get',
  })
}
// 删除用户地址 /cps/web/user-address/{userAddressId}
export function deleteUserAddress(userAddressId) {
  return request({
    url: '/cps/web/user-address/' + userAddressId,
    method: 'delete'
  })
}
// 设置用户默认地址 /cps/web/user-address/default-address/{userAddressId}
export function updatedefaultAddress(userAddressId) {
  return request({
    url: '/cps/web/user-address/default-address/'+userAddressId,
    method: 'put',
  })
}
