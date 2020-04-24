import React from 'react';
import { Layout } from 'antd';
import SideBar from './components/sideBar';
import Header from './components/header'
import './App.css'

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Hello from './components/hello/index';
import EntUser from './components/user/entUser';
import OrgUser from './components/user/orgUser';
import CompanyList from './routes/companyList/index';
import Labels from './routes/labels/index';
import Login from './routes/login/index';
// import BasicLayout from './layout/index'

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
    
    //https://react-guide.github.io/react-router-cn/docs/guides/basics/RouteConfiguration.html
    const routeConfig = [
      {
        path: '/',
        component: App,
        indexRoute: {},
        childRoutes: [

        ]
      }
    ]
    return (
      <Layout className="app">
        <Router>
          {/* <Route path="/"> */}
            <Route path="/login" component={Login} />
            <Route path='/'>
                {/* <SideBar sideBarCollapsed={sideBarCollapsed}></SideBar>
                <Layout>
                  <Header handleClickCollapse={this.handleClickCollapse}></Header>
                  <Content>
                    <Route path="" component={Hello} /> */}
                    <Route path="manage/entManage" component={EntUser} />
                    <Route path="/mobil-menu/manage/orgManage" component={OrgUser} />
                    <Route path="/mobil-menu/companyList" component={CompanyList} />
                    <Route path="/mobil-menu/labels" component={Labels} />
                  {/* </Content>
                  <Footer>footer</Footer>
                </Layout> */}
            {/* </Route> */}
          </Route>


        </Router>
      </Layout>
    )
  }
}

export default App;
