import axios from '../../src/index'
axios({
  method: 'get',
  url: '/simple/goods',
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'post',
  url: '/simple/goods',
  data: {
    c: 1,
    d: 2
  }
})