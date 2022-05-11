/*
 * @Author: hackrabbit
 * @Date: 2022-05-06 16:00:50
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-10 10:46:23
 * @Description: 
 */
import { Form, Input, Button, Checkbox } from "antd"

export default function FormDemo(props: any) {
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={props.onFinish}
      onFinishFailed={props.onFinishFailed}
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