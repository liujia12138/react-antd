import React from 'react';
import { Layout } from 'antd';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Hello from './components/hello/index';
import EntUser from './components/user/entUser';
import OrgUser from './components/user/orgUser';
import CompanyList from './routes/companyList/index';
import Labels from './routes/labels/index';
import Login from './routes/login/index';
import BasicLayout from './layout/index';
import { getToken } from '../src/utils/auth'

/**
 * App组件
 * 定义整个页面的布局
 */
class App extends React.Component {

  render() {
    //https://react-guide.github.io/react-router-cn/docs/guides/basics/RouteConfiguration.html
    const routes = [
      {
        path: '/index',
        component: Hello,
        auth: true,
        // children: [
        //   {
        //     path: '/labels',
        //     component: Labels,
        //     auth: true,
        //     // },{
        //     //   path: '/index',
        //     //   component: Hello,
        //     //   auth: true,
        //   }
        // ]
      }, {
        path: '/labels',
        component: Labels,
        auth: true,
      }, {
        path: '/manage/entManage',
        component: EntUser,
        auth: true,
      }, {
        path: '/manage/orgManage',
        component: OrgUser,
        auth: true,
      }, {
        path: '/companyList',
        component: CompanyList,
        auth: true,
      }
    ]
    const routeItem = (route) => {
      return <Route key={route.path} path={route.path} render={(props) => {
        //判断当前跳转的路由是否需要进行验证
        if (route.auth) {
          if (!getToken()) {
            return <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />;
          }
        }
        return <route.component></route.component>
      }} />
    }
    const routeList = routes.map(item => {
      if (item.children) {
        const childRoute = item.children.map(child => {
          child.path = item.path + child.path;
          const tmp = routeItem(child);
          return tmp;
        })
        return <item.component key={item.path}>
          {childRoute}
        </item.component>
      }
      return routeItem(item)
    })

    return (
      <Layout className="app">
        <Router>
          {/* Switch的作用是从上到下匹配route，匹配成功后，就不再往下找了 */}
          <Switch>
            <Route exact path="/login" component={Login} />
            {/* <Route path="/" > */}
            <BasicLayout>
              <Redirect from="/" to="/index" />
              {routeList}
            </BasicLayout>
            {/* </Route> */}
          </Switch>

        </Router>
      </Layout>
    )
  }
}

export default App;
