export interface AxiosRequestConfig {
  // 请求url
  url: string
  // 请求的http方法
  method?: Method
  // post\patch等类型请求的数据
  data?: any
  // get\head等类型请求的数据，拼接到url的query string中
  params?: any
  // 支持配置headers属性
  headers?: any
  // 通过设置XMLHttpRequest对象的responseType属性指定响应的数据类型
  responseType?: XMLHttpRequestResponseType
}

export type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

export interface AxiosResponse {
  // 服务端返回的数据
  data: any
  // HTTP状态码
  status: number
  // 状态消息
  statusText: string
  // 响应头
  headers: any
  // 请求配置对象
  config: AxiosRequestConfig
  // 请求的XMLHttpRequest对象实例
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {
}