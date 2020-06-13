import { LinkOutlined } from '@ant-design/icons';
import { Col, Form, Input, Layout, PageHeader, Row, Table, Tag, Typography, Button } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import userRequest from '../../utils/userRequest';
import repoColumns from './userRepositoryColumn';
const { Content } = Layout;
const { Title } = Typography;


export default function () {
    const [user, setUser] = useState({});
    const [userRepositories, setUserRepositories] = useState([]);
    const { userName } = useParams();

    useEffect(() => {
        userRequest
            .get(`/api/users/${userName}/details`)
            .then(response => {
                setUser(response.data);

                userRequest
                    .get(`/api/users/${userName}/repos`)
                    .then(response => setUserRepositories(response.data));
            });
    }, [userName]);

    return (
        <PageHeader
            title={user.login}
            className="site-page-header"
            tags={<Tag color="blue">{user.plan?.name}</Tag>}
            avatar={{ src: user.avatar_url }}
        >
            <Content>
                <Form>
                    <Row gutter={[24, 24]}>
                        <Col md={4} xs={24}>
                            <b>ID:</b>
                            <Input readOnly={true} value={user.id} />
                        </Col>
                        <Col md={4} xs={24}>
                            <b>Login:</b>
                            <Input readOnly={true} value={user.login} />
                        </Col>
                        <Col md={4} xs={24}>
                            <b>Profile URL: <a href={`${user.html_url}`} target="blank"><LinkOutlined /></a></b>
                            <Input readOnly={true} value={user.html_url} />
                        </Col>
                        <Col md={4} xs={24}>
                            <b>User Sinse:</b>
                            <Input readOnly={true} value={moment(user.created_at).format('YYYY-MM-DD')} />
                        </Col>
                    </Row>
                </Form>
                <Title level={3}>Repositories</Title>
                <Row gutter={[24, 24]}>
                    <Col md={24} xs={24}>
                        <Table columns={repoColumns} dataSource={userRepositories} />
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Col md={2} xs={2}>
                        <Link to="/users"><Button>Back</Button></Link>
                    </Col>
                </Row>
            </Content>
        </PageHeader>
    )
}