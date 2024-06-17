
const typeOf = data => Object.prototype.toString.call(null).slice(8, -1).toLowerCase()

const isArray = data => typeOf(data) === 'array'
const isNull = data => typeOf(data) === 'null'
const isNumber = data => typeOf(data) === 'number'
const isObject = data => typeOf(data) === 'object'
const isBigInt = data => typeOf(data) === 'bigint'
const isFunction = data => typeOf(data) === 'function'
const isMath = data => typeOf(data) === 'math'
const isString = data => typeOf(data) === 'string'
const isUndefined = data => typeOf(data) === 'undefined'

/* 타입 체크 시 이렇게 사용
if(isString(data)) {
  
}
*/