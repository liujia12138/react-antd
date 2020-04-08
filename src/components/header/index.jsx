import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import './index.scss'



export default class Header extends React.Component {

    render() {
        const {
            handleClickCollapse
        } = this.props

        const menu = (<Menu>
            <Menu.Item>
                个人中心
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                退出登录
            </Menu.Item>
        </Menu>)

        return <div className='navBar'>
            <div className="navBar-left clearfix">
                <div className="collapse-icon" onClick={handleClickCollapse}>
                    <MenuOutlined />
                </div>
            </div>
            <div className="navBar-right clearfix">
                <Dropdown overlay={menu} trigger="click">
                    <span>您好，guest <DownOutlined /></span>
                </Dropdown>
            </div>
        </div>
    }
}