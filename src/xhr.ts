import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config
  const requeset = new XMLHttpRequest()
  requeset.open(method.toUpperCase(), url, true)
  requeset.send(data)
}