import React from 'react';
import { Table } from 'antd';
import {mealLablesList} from '../../api/labels'

class Labels extends React.Component{
    state={
        // labelList:[]
    }

    //constructor:一般用来初始化state，声明ref，绑定方法。
    constructor(props){
        super(props);
        let that = this;
        
        mealLablesList().then(res => {
            if(res.data.code == '200'){
                let labelList=res.data.data.list;
                that.setState({
                    labelList: labelList
                })
                
            }
        })
    }

    //react16中，生命周期
    // 新增了getDerivedStateFromProps、getSnapshotBeforeUpdate来代替弃用的三个钩子函数componentWillMount、componentWillReceivePorps，componentWillUpdate
    // getDerivedStateFromProps在render之前调用，getSnapshotBeforeUpdate在render之后调用
    // 注意：getDerivedStateFromProps前要加上static保留字，声明为静态方法
    // 注意：getDerivedStateFromProps内的this是undefined，获取不到Label的this
    // 一般用来根据props的值来更新state
    
    static getDerivedStateFromProps(props, state){
        //获取标签列表
        return null;
    }
    render(){
        const columns = [
            {
                title: '标签名称',
                dataIndex: 'name',
                key: 'name',
            },{
                title: '内容',
                dataIndex: 'content',
                key: 'content'
            },{
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },{
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime'
            },{
                title: '更新时间',
                dataIndex: 'updateTime',
                key: 'updateTime'
            }
        ]
        return (
            <div>
                <Table columns={columns} dataSource={this.state.labelList}  rowKey='id'/>
            </div>
        )
    }
}

export default Labels;