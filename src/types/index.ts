import { type } from "os"

/**
 * 定义接口请求参数config接口类型
 * url 请求地址，必选
 * method http请求方法，可选
 * data post path等类型请求的数据放到request body中，可选
 * params get head等类型请求的数据拼接到url的query string中，可选
 * headers 设置请求头
 */
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequsetResponseType
}
/**
 * 为了让 method 只能传入合法的字符串
 * 定义一种字符串字面量类型 Method
*/
export type Method = 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

/**
 * responseType指定的响应数据类型
 */
export type XMLHttpRequsetResponseType = ''
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'

/**
 * 服务端响应数据，支持promise调用
 * data 服务端返回的数据
 * status HTTP状态码
 * statusTest 状态消息
 * header 响应头
 * config 请求配置对象
 * request 请求的XMLHttpRequset对象实例request
 */
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}
