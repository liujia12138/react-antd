import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  Hello from './components/hello/index'

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Hello msg="你好" date={new Date()}/>
  </React.StrictMode>,
  document.getElementById('root')
)

const ele = <h3>hellooooo</h3>
ReactDOM.render(ele, document.getElementById('react-dom'))

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('react-dom')
  );
}
// function Clock(props){
// return <div>props: 现在是{props.date.toLocaleTimeString()}</div>
// }

class Clock extends React.Component{
  render(){
    return(
      <div>
       <h3>使用React.component</h3>
       <div>现在是：{this.props.date.toLocaleTimeString()}</div>
      </div>
    )
      
  }
}

function tick2(){
  ReactDOM.render(
    //组件名首字母必须大写
    <Clock date={new Date()}/>,
    document.getElementById('react-dom')
  )
}
 
setInterval(tick2, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
