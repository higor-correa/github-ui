import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import userRequest from '../../utils/userRequest';
import UserCard from './userCard';

export default function () {
    const [users, setUsers] = useState([]);
    const [nextPage, setNextPage] = useState('/api/users');

    const searchForUsers = () => {
        userRequest
            .get(nextPage)
            .then(({ data }) => {
                setUsers(data.users);
                setNextPage(data.nextPage);
            });
    }

    useEffect(() => {
        searchForUsers();
    }, []);

    return (
        <>
            <Row gutter={[25, 25]} justify='center'>
                {users?.map(x =>
                    <Col
                        key={x.id}
                        md={5}
                        xs={25}>
                        <UserCard user={x} />
                    </Col>)}
            </Row>
            <Row justify='center'>
                <Col md={3} style={{ textAlign: 'center' }}>
                    <Button type="primary" onClick={() => searchForUsers()}>Next Page</Button>
                </Col>
            </Row>
        </>
    )
}