import http from '@/service/http'
import * as T from './type'

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post('/login', params)
  },
}
export default loginApi
