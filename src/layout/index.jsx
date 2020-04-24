import React from 'react';
import { Layout } from 'antd';
import SideBar from '../components/sideBar';
import Header from '../components/header';

export default class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
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
                {/* <SideBar sideBarCollapsed={sideBarCollapsed}></SideBar>
                <Layout>
                    <Header handleClickCollapse={this.handleClickCollapse}></Header>
                    
                    <Footer>footer</Footer>
                </Layout> */}
            </Layout>
        )
    }
}