import React from 'react';
import { Layout } from 'antd';
import SideBar from './components/sideBar';
import Header from './components/header'
import './App.css'

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Hello from './components/hello/index'
import EntUser from './components/user/entUser';
import OrgUser from './components/user/orgUser';

const { Footer, Content } = Layout

/**
 * App组件
 * 定义整个页面的布局
 */
class App extends React.Component {
  state = {
    sideBarCollapsed: false,//是否折叠侧边栏
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
    const {
      sideBarCollapsed
    } = this.state
    return <Layout className="app"><Router>
      <SideBar sideBarCollapsed={sideBarCollapsed}></SideBar>
      <Layout>
        <Header handleClickCollapse={this.handleClickCollapse}></Header>
        <Content>
          <div>
            <Route path="/index" component={Hello} />
            <Route path="/manage/entManage" component={EntUser} />
            <Route path="/manage/orgManage" component={OrgUser} />
          </div>
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </Router>
    </Layout>
  }
}

export default App;
