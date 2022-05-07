/*
 * @Author: hackrabbit
 * @Date: 2022-05-06 16:00:50
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-06 16:25:47
 * @Description: 
 */
import { Form, Input, Button, Checkbox } from "antd"
import { post } from '../utils/request'

export default function FormDemo() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    let { username, password } = values;
    post('/api/add', { username, password }).then(data => {
      console.log(data)
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}