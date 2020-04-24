import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { removeToken } from '../../utils/auth'
import './index.scss'



export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),//初始化一个date，不然会报错
        }
        //给事件处理函数绑定this
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);//组件卸载时清除定时器
    }

    //事件绑定
    // 将事件处理函数声明为class中的方法
    handleClick(e) {
        console.log(e, this, "handleClick");//想要使用this需要在构造器constructor中绑定this,否则this的值时undefined
    }
    //如果觉得用bind绑定this太麻烦，可以使用箭头函数来获得this
    handleClick1 = () => {
        console.log(this)
    }

    //退出登录
    logout = () => {
        removeToken();
        // this.props.history.push('/login')
    }


    //计时器组件

    clock() {
        return (
            <span>
                {this.state.date.toLocaleString()}
            </span>
        )
    }

    render() {
        const {
            handleClickCollapse
        } = this.props

        const menu = (<Menu>
            <Menu.Item>
                个人中心
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={this.logout}>
                <Link to="/login">退出登录</Link>
            </Menu.Item>
        </Menu>)

        return <div className='navBar'>
            <div className="navBar-left clearfix">
                <div className="collapse-icon" onClick={handleClickCollapse}>
                    <MenuOutlined />
                </div>
            </div>
            {this.clock()}
            <div className="navBar-right clearfix">
                <Dropdown overlay={menu} trigger="click">
                    <span>您好，guest <DownOutlined /></span>
                </Dropdown>
            </div>
        </div>
    }
}