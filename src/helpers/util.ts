const originToString = Object.prototype.toString

export function isDate(value: any): value is Date {
  return originToString.call(value) === '[object Date]'
}

// export function isObject(value: any): value is Object {
//   return value !== null && typeof value === 'object'
// }

export function isPlainObject(value: any): value is Object {
  return originToString.call(value) === '[object Object]'
}