import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config
  const requeset = new XMLHttpRequest()
  requeset.open(method.toUpperCase(), url, true)
  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      requeset.setRequestHeader(name, headers[name])
    }
  })
  requeset.send(data)
}