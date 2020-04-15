import React from 'react'
import './index.scss'
import { Layout, Form, Input, Button } from 'antd'

class Login extends React.Component {

    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 0, span: 16 },
        };
        return (
            <Layout className="dark-bg">
                <Form
                    name='login'
                    {...formItemLayout}
                >
                    <Form.Item
                        label='账号：'
                        name='username'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='密码：'
                        name='password'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" >登录</Button>
                    </Form.Item>
                </Form>
            </Layout>
        )
    }
}

export default Login;