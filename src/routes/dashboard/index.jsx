import React from 'react';

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    render() {
        return <h1>react-antd Admin</h1>
    }
}