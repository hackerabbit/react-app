/*
 * @Author: hackrabbit
 * @Date: 2022-05-07 17:51:58
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-07 18:06:09
 * @Description: 
 */

import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function LayoutPage() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  }

  const navigate = useNavigate();

  return (<Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
            onClick: () => { navigate('/') }
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
            onClick: () => { navigate('/about') }
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
            onClick: () => { navigate('/dashboard/messages') }
          },
          {
            key: '4',
            icon: <UploadOutlined />,
            label: 'nav 4',
            onClick: () => { navigate('/list') }
          },
        ]}
      />
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  </Layout>)
}

// export default function LayoutPage1() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard/messages">Messages (Dashboard)</Link>
//           </li>
//           <li>
//             <Link to="/list">Table</Link>
//           </li>
//         </ul>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }






