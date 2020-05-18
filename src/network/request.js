import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'https://autumnfish.cn',
    timeout:5000
  })
  instance.interceptors.response.use(res =>{
    return res.data
  },err =>{
    console.log(err);
  })
  //正式发送请求
  return instance(config)
}
  