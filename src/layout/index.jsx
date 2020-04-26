import React from 'react';
import { Layout } from 'antd';
import SideBar from '../components/sideBar';
import Header from '../components/header';
const { Footer, Content } = Layout

export default class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarCollapsed: false,//是否折叠侧边栏
        }
    }
    
    /**
   * 控制侧边栏
   */
    handleClickCollapse = () => {
        const sideBarCollapsed = !this.state.sideBarCollapsed
        this.setState({
            sideBarCollapsed
        })
    }
    render() {
        return (
            <Layout className="app">
                <SideBar sideBarCollapsed={this.state.sideBarCollapsed}></SideBar>
                <Layout>
                    <Header handleClickCollapse={this.handleClickCollapse}></Header>
                    <Content>{this.props.children}</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        )
    }
}