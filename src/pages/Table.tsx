/*
 * @Author: hackrabbit
 * @Date: 2022-05-06 17:40:27
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-11 16:18:12
 * @Description: 
 */
import { useEffect, useState } from "react"
import { Table, Popconfirm } from "antd"
import { ColumnsType } from "antd/lib/table"
import { get, post } from "../../utils/request"

import axios from "../../utils/axios"


interface user {
  key: number,
  name: string,
}

export default function TableDemo() {
  const [dataSource, setDataSource] = useState<user[]>([]);

  const columns: ColumnsType<user> = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'password',
      title: 'Password',
      dataIndex: 'password',
    },
    {
      key: 'action',
      title: 'Action',
      render: (text, record) => (
        <>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
          |
          <Popconfirm title="Sure to update?" onConfirm={() => handleUpdate(record)}>
            <a>update</a>
          </Popconfirm>
        </>
      )
    }
  ]

  function handleDelete(key: React.Key) {
    console.log(key)
    setDataSource(dataSource.filter(item => item.key !== key))
    post('/api/delete', { id: key }).then(res => {
      console.log(res)
    })
  }

  function handleUpdate(record: user) {
    console.log(record)


  }

  useEffect(() => {
    if (dataSource.length === 0) {
      axios.get('/api/data').then((data: any) => {
        if (data.code === 1) { // 请求成功
          let list = data.data.list.map((item: { id: number, username: string, password: string }) => {
            return { key: item.id, name: item.username, password: item.password }
          })
          setDataSource(list)
        }
      })
    }
  }, [])

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}