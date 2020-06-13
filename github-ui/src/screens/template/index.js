import { Layout, Menu } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../template/404';
import User from '../users';
import UserDetail from '../users/userDetails';

const { Header, Content } = Layout;

export default function () {
    return (
        <BrowserRouter>
            <Layout>
                <Header className="header" >
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Users</Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{ height: '100%' }}>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                backgroundColor: 'white'
                            }}
                        >
                            <Switch>
                                <Route path="/users/:userName" component={UserDetail} />
                                <Route path="/users" exact={true} component={User} />
                                <Route path="/" exact={true} component={User} />
                                <Route path="/" component={NotFound} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
}