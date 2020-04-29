import React from 'react'
import './index.scss'
import { Layout, Form, Input, Button } from 'antd'
import { login } from '../../api/user'
import {setToken} from '../../utils/auth'

class Login extends React.Component {

    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 0, span: 16 },
        };
        const onFinish = (values) => {
            if (values) {
                login(values).then(res => {
                    setToken(res.data.token);
                    this.props.history.push("/labels")
                })
            }

        }
        return (

            <Layout className="dark-bg">
                <Form
                    name='loginForm'
                    initialValues={{mobile:'15727394277', password: '123456'}}
                    {...formItemLayout}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label='账号：'
                        name='mobile'
                        rules={[{ required: true, message: '账号不能为空' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='密码：'
                        name='password'
                        rules={[{ required: true, message: '密码不能为空' }]}
                    >
                        <Input type="password" />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </Layout>
        )
    }
}

export default Login;