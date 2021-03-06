import axios from 'axios'
// import * as $ from 'jquery'
// import * as CryptoJS from 'crypto-js'
// import _ from 'underscore'

const URL_PREFIX = 'http://www.smart-hox.com:8081/hoxJK'
// const URL_PREFIX = 'http://205.168.1.106:8081/hoxJK'

let registerId = localStorage['registerId']
let account = localStorage['account']

/**
 * 获取registerId
 * @returns {*}
 */
export function getRegisterId () {
  'use strict'
  return registerId
}

/**
 * 获取registerId
 * @returns {*}
 */
export function getAccount () {
  'use strict'
  return account
}

/**
 * 登陆后,注入registerId
 */
export function setRegisterId (id) {
  'use strict'
  registerId = id
  localStorage['registerId'] = id
}

/**
 * 登陆后,注入Account
 */
export function setAccount (phone) {
  'use strict'
  account = phone
  localStorage['account'] = phone
}

/**
 * 退出登录
 * 删除registerId和Account
 */
export function logout () {
  'use strict'
  registerId = undefined
  delete localStorage['registerId']
  account = undefined
  delete localStorage['account']
}

export function send (options) {
  options.url = URL_PREFIX + options.name
  delete options.name
  return new Promise(function (resolve, reject) {
    switch (options.method) {
      case 'POST':
        axios.post(options.url, options.data
        ).then((res) => {
          resolve(res)
        }).catch((error) => {
          console.log(error)
        })
        break
      case 'GET':
        axios.get(options.url
        ).then((res) => {
          resolve(res)
        }).catch((error) => {
          console.log(error)
        })
        break
      case 'DELETE':
        axios.delete(options.url
        ).then((res) => {
          resolve(res)
        }).catch((error) => {
          console.log(error)
        })
        break
      case 'PUT':
        axios.put(options.url
        ).then((res) => {
          resolve(res)
        }).catch((error) => {
          console.log(error)
        })
        break
    }
  })
}
// export function send0 (options) {
//   options.url = URL_PREFIX + options.name
//   delete options.name
//   return new Promise(function (resolve, reject) {
//     axios(options).then((data) => resolve(data), (xhr) => reject(xhr && xhr.status))
//   })
// }
