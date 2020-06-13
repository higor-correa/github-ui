import { LinkOutlined } from '@ant-design/icons';
import React from 'react';

export default [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'URL',
        dataIndex: 'html_url',
        key: 'html_url',
        render: (value) => (<a href={value} target="blank"><LinkOutlined /></a>)
    }
]