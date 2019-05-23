import { AxiosRequestConfig, AxiosPromise } from './types'
import xhr from './xhr'
import { bulidURL } from './helpers/url'
import { processHeaders } from './helpers/header'
import { transformRequest } from './helpers/data'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
}

function processConfig (config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl (config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}

function transformHeaders (config: AxiosRequestConfig): string {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios