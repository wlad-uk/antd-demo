import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useLocation, useNavigate} from 'react-router-dom'
const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
const items = [
    getItem('Option 1', '/', <PieChartOutlined />),
    getItem('Option 2', '/2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '/3'),
        getItem('Bill', '/4'),
    ]),   
];

const arr_md =[
  {
    key:'/',
    arr:[' 1'],
  }, 
  {
    key:'/2',
    arr:[' 2'],
  },
  {
    key:'/3',
    arr:[' 3'],
  },
  {
    key:'/4',
    arr:[' 4']
  },
  
];

const Md_file = (props) => { 
  var elem = arr_md.find((elem) => props.name == elem.key)??arr_md[0];
    return (
        <> 
            {elem.arr}
        </> 
    )
}

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const [selectMenu, setSelectMenu] = useState([useLocation().pathname]); 

  const onClickMenu = (selectedKeys) => {  
    navigate(selectedKeys.key);
    setSelectMenu(selectedKeys.key); 
  }; 


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectMenu]}
          items={items}
          onClick={onClickMenu}
          selectedKeys={selectMenu}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
          <Md_file  name={selectMenu} />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;