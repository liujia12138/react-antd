import React from 'react';
import { Table, Input, Form, Tag, Row, Col, Button } from 'antd';
// const form = Form.useForm();

class EntUser extends React.Component {

    render() {
        const columns = [
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
            }, {
                title: '关联企业',
                dataIndex: 'entName',
                key: 'entName',
            }, {
                title: '注册地址',
                dataIndex: 'address',
                key: 'address',
            }, {
                title: '联系人',
                dataIndex: 'concat',
                key: 'concat',
            }, {
                title: '联系电话',
                dataIndex: 'phone',
                key: 'phone',
            }, {
                title: '用户状态',
                dataIndex: 'status',
                key: 'status',
                render: status => {
                    let color = status == "0" ? "green" : "volcano";
                    let text = status == "0" ? "正常" : "异常"
                    return (
                        <Tag color={color}>
                            {text}
                        </Tag>
                    );
                }
            }
        ]

        const data = [
            {
                key: 1,
                username: 'user1',
                entName: '哈哈哈有限责任公司',
                address: '北京市朝阳区',
                concat: '张三',
                phone: '13888888888',
                status: "0"
            }, {
                key: 2,
                username: 'user1',
                entName: '哈哈哈有限责任公司',
                address: '北京市朝阳区',
                concat: '张三',
                phone: '13888888888',
                status: "0"
            }, {
                key: 3,
                username: 'user1',
                entName: '哈哈哈有限责任公司',
                address: '北京市朝阳区',
                concat: '张三',
                phone: '13888888888',
                status: "1"
            }, {
                key: 4,
                username: 'user1',
                entName: '哈哈哈有限责任公司',
                address: '北京市朝阳区',
                concat: '张三',
                phone: '13888888888',
                status: "0"
            }, {
                key: 5,
                username: 'user1',
                entName: '哈哈哈有限责任公司',
                address: '北京市朝阳区',
                concat: '张三',
                phone: '13888888888',
                status: "1"
            }
        ]

        const getFields = () => {
            const count = 10;
            const children = [];
            for (let i = 0; i < count; i++) {
                children.push(
                    <Col span={8} key={i}>
                        <Form.Item
                            name={`field-${i}`}
                            label={`Field ${i}`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder" />
                        </Form.Item>
                    </Col>,
                );
            }
            return children;
        }
        
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        return <div>
            <div className="searchBar">
                <Form
                    // form={form}
                    name="advanced_search"
                    className="ant-advanced-search-form"
                    onFinish={onFinish}
                >
                    <Row gutter={24}>{getFields()}</Row>
                </Form>
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    }
}

export default EntUser