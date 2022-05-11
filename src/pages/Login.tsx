
/*
* @Author: hackrabbit
* @Date: 2022-05-09 12:02:00
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-11 16:51:52
* @Description: 
*/

import FormDemo from "./Form"
import axios from '../../utils/axios'
export default function LoginPage() {
  const onFinish = (values: any) => {
    console.log(values)
    axios.post('/api/login', values).then((res: any) => {
      console.log(res);
      if (res.success) {
        localStorage.setItem('token', res.token)
        location.reload();
      }
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
  }

  return (
    <FormDemo onFinish={onFinish} onFinishFailed={onFinishFailed} />
  )
}