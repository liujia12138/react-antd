import React from 'react';
import { Row, Col, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './index.scss'

const menu = (<Menu>
    <Menu.Item>
        个人中心
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
        退出登录
    </Menu.Item>
</Menu>)

export default class Header extends React.Component {

    render() {
        return <div className='header'>
            <Row>
                <Col span={6} offset={18}>
                    <Dropdown overlay={menu} trigger="click">
                        <span>您好，guest <DownOutlined /></span>
                    </Dropdown>
                </Col>
            </Row>
        </div>
    }
}