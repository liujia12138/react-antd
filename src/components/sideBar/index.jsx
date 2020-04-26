import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import { menuList } from '../../menu';
import { Menu, Layout } from 'antd';
import Logo from './logo';
import './index.scss';

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const { Sider } = Layout


class SideBar extends React.Component {
    state = {
        currentKey: "1",
    }
    getMenuItem(menu) {
        return (
            <MenuItem onClick={this.handleClick} key={menu.key}>
                {/* NavLink :可以根据当前页面路由设置选中的link的样式 */}
                <NavLink activeClassName="active-link" to={menu.key}><span className="menuitem-title">{menu.name}</span></NavLink>
            </MenuItem>
        )
    }
    handleClick = (e) => {
        return this.setState({
            currentKey: e.key
        })
    }
    render() {
        const menu = menuList.map(item => {
            //是否有二级菜单
            if (item.children) {
                const childMenu = item.children.map(child => {
                    if (child.children) {
                        return false;
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
        // this.menu = menu;
        const {
            sideBarCollapsed
        } = this.props

        const classnames = cx('sidebar-left', {
            'layout-sider-collapsed': sideBarCollapsed
        })

        return <Sider
            className={classnames}
            width={200}
            collapsedWidth={0}
            collapsed={sideBarCollapsed}//当前收起状态
            collapsible={true}//是否可收起
            trigger={null}//隐藏collapsedWidth为0时出现的trigger
        >
            <div>
                <Logo></Logo>
                {sideBarCollapsed}
                <Menu
                    theme="dark" mode="inline"
                >
                    {menu}</Menu>
            </div>
        </Sider>
    }
}

export default SideBar