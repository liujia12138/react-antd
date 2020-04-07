import React from 'react';
import { Layout } from 'antd';
import SideBar from './components/sideBar';
import Header from './components/header'
import './App.css'


const { Footer, Sider, Content} = Layout

/**
 * App组件
 * 定义整个页面的布局
 */
class App extends React.Component {
  render(){
    return <Layout className="app">
      <Sider><SideBar></SideBar></Sider>
      <Layout>
        <Header></Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  }
}

export default App;
