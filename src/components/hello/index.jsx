import React from 'react';
// function HelloMessage(props) {
//     return <h1>Hello React: {props.msg}</h1>
// }

// const ele = <HelloMessage msg="我是msg" />

// ReactDOM.render(ele, document.getElementById('example'))

export default class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    //生命周期
    // 组件挂载到dom之后,开启计时器，更新state
    componentDidMount(){
        this.timer = setInterval(() => this.tick(), 1000)
    }
    //组件卸载，清除定时器
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    render(){
    return <h1>Hello React: {this.props.msg} + {this.state.date.toLocaleTimeString()}</h1>
    }
}