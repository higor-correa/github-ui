import React from 'react'
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function ({ user }) {
    return (
        <Card
            title={`${user.id} - ${user.login}`}
            bordered={true}>
            <img src={user.avatar_url} width="100%" style={{textAlign:'right'}} />
            <br /><br />
            <Link to={`/users/${user.login}`}><Button>Details</Button></Link>
        </Card>
    )
}