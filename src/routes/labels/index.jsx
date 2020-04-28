import React from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { mealLabelList, mealLabelAdd } from '../../api/labels'

const AddForm = (props) => {
    const { visible, onHandleVisibleChange, onHandleCancel, onConfirmLoadingChange } = props;
    let confirmLoading = props.confirmLoading
    const [form] = Form.useForm();
    const initialValues = {
        name: "name",
        content: "123"
    }

    const handleConfirmAdd = () => {
        console.log(confirmLoading, initialValues, form, "confirmLoading");
        // mealLabelAdd
        form.validateFields().then(value => {
            console.log(value, 'value');
            onConfirmLoadingChange()
            mealLabelAdd(value).then(res => {
                console.log(res, "res")
                if (res.code === 200) {
                    onConfirmLoadingChange()
                }
            })
        })
    }
    return (
        <Modal
            title="添加标签"
            okText="确认"
            cancelText="取消"
            visible={visible}
            onCancel={onHandleCancel}
            onOk={handleConfirmAdd}
            confirmLoading={confirmLoading}
        >
            <Form form={form} name="add-form" initialValues={initialValues}>
                <Form.Item
                    label="标签名称"
                    name="name"
                    rules={[{ required: true, message: "标签名称不能为空" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="标签内容"
                    name="content"
                    rules={[{ required: true, message: "标签内容不能为空" }]}
                >
                    <Input />
                </Form.Item>
            </Form>

        </Modal>
    )
}

class Labels extends React.Component {

    //constructor:一般用来初始化state，声明ref，绑定方法。
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading: false,//添加弹框确认按钮loading
        }
        this.getList();
    }

    //react16中，生命周期
    // 新增了getDerivedStateFromProps、getSnapshotBeforeUpdate来代替弃用的三个钩子函数componentWillMount、componentWillReceivePorps，componentWillUpdate
    // getDerivedStateFromProps在render之前调用，getSnapshotBeforeUpdate在render之后调用
    // 注意：getDerivedStateFromProps前要加上static保留字，声明为静态方法
    // 注意：getDerivedStateFromProps内的this是undefined，获取不到Label的this
    // 一般用来根据props的值来更新state

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    componentDidMount() {//组件挂载之后执行

    }

    componentWillUnmount() {//组件被卸载之前

    }

    getList = () => {
        mealLabelList().then(res => {
            if (res.code === 200) {
                let labelList = res.data.list;
                this.setState({
                    labelList: labelList
                })
            }
        })
    }

    //打开add modal
    handleShowAdd = () => {
        this.setState({
            visible: true
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    //切换弹框显示/隐藏状态
    handleVisibleChange = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    // 切换确认按钮loading状态
    confirmLoadingChange = () => {
        this.setState({
            confirmLoading: !this.state.confirmLoading
        })
    }

    render() {
        const columns = [
            {
                title: '标签名称',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '内容',
                dataIndex: 'content',
                key: 'content'
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            }, {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime'
            }, {
                title: '更新时间',
                dataIndex: 'updateTime',
                key: 'updateTime'
            }
        ]
        const { visible, confirmLoading } = this.state;


        return (
            <div>
                <div className="tool-bar">
                    <div className="tool-btn">
                        <Button type="primary" size="small" onClick={this.handleShowAdd}><PlusCircleOutlined />添加标签</Button>
                    </div>
                </div>
                <Table columns={columns} dataSource={this.state.labelList} rowKey='id' />
                {/* 添加标签弹框 */}
                <AddForm visible={visible} confirmLoading={confirmLoading} onConfirmLoadingChange={this.confirmLoadingChange} onHandleVisibleChange={this.handleVisibleChange} onHandleCancel={this.handleCancel} />
            </div>
        )
    }
}


export default Labels