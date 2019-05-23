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
}

export type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'