import React from 'react';
import { menuList } from '../../menu';
import { Menu } from 'antd';
import Logo from './logo';
import './index.scss'
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

console.log(menuList, "menuList")
class SideBar extends React.Component {
    state = {
        currentKey: "1"
    }
    getMenuItem(menu) {
        return (
            <MenuItem onClick={this.handleClick} key={menu.key}>
                <span className="menuitem-title">{menu.name}</span>
            </MenuItem>
        )
    }
    handleClick = (e)=>{
        this.setState({
            currentKey: e.key
        })
    }
    componentWillMount() {
        const menu = menuList.map(item => {
            //是否有二级菜单
            if (item.children) {
                const childMenu = item.children.map(child => {
                    if (child.children) {
                        return;
                    } else {
                        const tmp = this.getMenuItem(child);
                        return tmp;
                    }
                })
                return <SubMenu
                    key={item.key}
                    title={item.name}
                >
                    {childMenu}
                </SubMenu>;
            } else {
                //没有二级菜单
                const tmp = this.getMenuItem(item);
                // paths.pop();  // return之前别忘了pop
                return tmp;
            }
        })
        this.menu = menu;
        console.log(this.menu)
    }
    render() {
        return <div className="sidebar">
            <Logo></Logo>
            <Menu
            theme="dark" mode="inline"
            >
            {this.menu}

            </Menu>
        </div>
    }
}

export default SideBar