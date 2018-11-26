import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class AppSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: '1'
        };
    }

    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu theme="light"
                      mode="inline"
                      style={{ height: '100%', borderRight: 0 }}
                      defaultOpenKeys={['sub1','sub2','sub3']}
                      defaultSelectedKeys={[this.state.current]} >
                    <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>交易管理</span></span>}>
                        <Menu.Item key="1"><Link to="/users">交易查询</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/posts">交易退款</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/about">退款查询</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/test" >交易统计</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>对账管理</span></span>}>
                        <Menu.Item key="5"><Link to="/users">交易对账</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>凭证管理</span></span>}>
                        <Menu.Item key="6"><Link to="/users">电子凭证</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default AppSider
